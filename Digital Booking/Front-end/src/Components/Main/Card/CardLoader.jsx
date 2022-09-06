import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import ContentLoader from "react-content-loader";
const CardLoader = (props) => {
    return ( 
    //     <SkeletonTheme color='gray' highlightColor='black'>
    //         <Skeleton/>
    //         <div className="property-card" >
    //   {/* <Link to={"/category/"+props.id+"/"+props.title} ><img  src={props.url_image} alt="hola" className='property-image' /></Link> */}
    //    <Skeleton />   

    //   <div className="property-description">
    //     <h3 >que hacé jo´se</h3>
    //     <p><Skeleton /></p>

    //   </div>

    // </div>
    //     </SkeletonTheme>
    //  );

    <div className="property-description">

<ContentLoader 
    speed={3}
    width={250}
    height={280}
    viewBox="0 0 250 280"
    backgroundColor="#d7dada"
    foregroundColor="#5e5a5a"
    {...props}
  >
    <rect x="0" y="8" rx="3" ry="3" width="380" height="120" />
    <rect x="8" y="142" rx="3" ry="3" width="88" height="10" /> 
    <rect x="8" y="166" rx="3" ry="3" width="52" height="6" /> 
     
    
  </ContentLoader>
    </div>

    )
}

 
export default CardLoader;