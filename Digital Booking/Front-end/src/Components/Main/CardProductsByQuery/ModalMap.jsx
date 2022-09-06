import React from 'react'
import MapsBlock from '../../Product/maps/MapsBlock';

export default function ModalMap({datosHeader,openMap,handleMap}) {

    return (
        openMap && (
          <div className="modal-map">
            <div className="header-modal">
              <span onClick={handleMap}>
                <i className="fas fa-times"></i>
              </span>
            </div>
            <MapsBlock datosHeader={datosHeader}/>
          </div>
        )
      );
    
    
  
}
