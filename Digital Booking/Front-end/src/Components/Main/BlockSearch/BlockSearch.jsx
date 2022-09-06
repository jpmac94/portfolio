import React from "react";
import Calendario from "./Calendario";
import ButtonSearch from "./ButtonSearch";
import SelectorCity from "./SelectorCity";
import "../../../styles/calendar/BlockSearch.css";


export default function BlockSearch() {


  return (
    <div className="blockSearch">
      <h1>Look offers on hotels, houses and much more</h1>

      <div className="divMenu">
        <SelectorCity className="selectorCity"></SelectorCity>
        <Calendario ></Calendario>
        <ButtonSearch className="buttonSearch"></ButtonSearch>
      </div>
    </div>
  );
}
