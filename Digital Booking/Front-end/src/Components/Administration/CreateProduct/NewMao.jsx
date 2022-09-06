import React, { useContext, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import { formatRelative } from "date-fns";
import "../../../styles/admin/map.css"
import "@reach/combobox/styles.css";
import { ContextProduct } from "../../Context/ContextProduct";


const libraries = ["places"];
const mapContainerStyle = {
  position: "relative",
  height: "300px",
  width: "100%"
};
const options = {
  disableDefaultUI: true,
  zoomControl: true
};
const center = {
  lat: 43.6532,
  lng: -79.3832
};


export default function NewMao() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",
    libraries
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const { 
    setLongitudeAdmin,setLatitudeAdmin,longitudeAdmin,latitudeAdmin,
  } =useContext(ContextProduct)


  
 

  const onMapClick = React.useCallback(e => {
    setMarkers(current => [
      // ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      }
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
   
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    setMarkers(current => [
      // ...current,
      {
        lat,
        lng,
        time: new Date()
      }
    ])
    setLatitudeAdmin(lat)
    setLongitudeAdmin(lng)
    console.log(longitudeAdmin + "es lati");
    console.log(latitudeAdmin + "es lng")
  }, []);




  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
     
      <Search panTo={panTo} />
      
      <Locate panTo={panTo} />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            // icon={{
            //   url: `/bear.svg`,
            //   origin: new window.google.maps.Point(0, 0),
            //   anchor: new window.google.maps.Point(15, 15),
            //   scaledSize: new window.google.maps.Size(30, 30)
            // }}
          />
          
        ))}

      
      </GoogleMap>
   
    </div>
  );
}


function Locate({ panTo }) {
  
 

  const { 
  
    setAddressAdmin,adressAdmin,setLongitudeAdmin,setLatitudeAdmin,latitude,longitude
  } =useContext(ContextProduct)

  
  const handleSelectButtom = () => {
  
      navigator.geolocation.getCurrentPosition((position) => {
        
         const lat= position.coords.latitude;
         const lng= position.coords.longitude;
       
        const KEY = "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk";
    
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            const address = result.results[0].formatted_address;
            setAddressAdmin(address)
            setLongitudeAdmin(lng)
          setLatitudeAdmin(lat)
          });
          panTo({ lat, lng });
          
          

      });
  }
  


  return (
    <>
    <button
      className="locate"
      onClick={handleSelectButtom }
        
       
  
    >
      <span>Click for your actual location</span>
     
    </button>
     
     </>
  );
}

function Search({ panTo }) {

  const { 
  
    setAddressAdmin,setLongitudeAdmin,setLatitudeAdmin,latitudeAdmin,longitudeAdmin
  } =useContext(ContextProduct)


  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 34.6, lng: () => -79.3832 },
      radius: 100 * 1000
    }
  });


  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = async address => {
    setValue(address, false);
    //adress aca//
    console.log("es el adress"+address)
    setAddressAdmin(address)
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      setLatitudeAdmin(lat)
      setLongitudeAdmin(lng)
      console.log(longitudeAdmin + "es lati");
      console.log(latitudeAdmin + "es lng")
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  
    // 
  

    

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search the address "
          className="map-input"
        />
        <ComboboxPopover className="map-popover" >
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption className = "map-option" key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
