import React from "react";
import { Link } from "react-router-dom";
import { VscChevronLeft } from "react-icons/vsc";
import "./../../../styles/product/headerBlockStyle.css";

export default function HeaderBlockAdm(props) {
  return (
    <div className="container-header-product s">
      <h4>Administration</h4>

      <div className="container-header-product-r">
        <Link  to={"/" + props.title}>
          <VscChevronLeft className="back-icon" />
        </Link>
      </div>
    </div>
  );
}
