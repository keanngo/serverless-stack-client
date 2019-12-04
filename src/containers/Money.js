import React from "react";
import "./Money.css";
import LoaderButton from "../components/LoaderButton";
export default function Money() {
  return (
    <div className="Money">
      <div className="lander">
        <h1>Money</h1>
      </div>
      <div className="MoneyButton">
        <LoaderButton
        block
        type="submit"
        bsSize="large"
        bsStyle="primary"
        >
        Make it rain
        </LoaderButton>   
    </div> 
    </div>
  );
}