import React from "react";
import BlockDates from "./BlockDates";
import ContainerData from "./ContainerData";
import ContainerTime from "./ContainerTime";
import DetailReservation from "./DetailReservation";

export default function ContainerReservation({ datosReservation }) {
  return (
    <div className="container-all-dates">
      <div className="container-reservation">
        <div className="container-left">
          <ContainerData />
          <BlockDates datosReservation={datosReservation}/>
          <ContainerTime />
        </div>
        <div className="container-right">
          <DetailReservation props={datosReservation} />
        </div>
      </div>
    </div>
  );
}
