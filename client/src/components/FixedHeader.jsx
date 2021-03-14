import { useState } from "react";
import { Affix, Button } from "antd";
import { ObjectModal } from "../page/objects/ObjectModal";

export const FixedHeader = ({ title, buttonTitle, handleOnClick }) => {
  
  return (
    <>
      <Affix offsetTop={0}>
        <div
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: "0px" }}> {title} </h1>
          <Button type="primary" onClick={handleOnClick}>
            {buttonTitle}
          </Button>
        </div>
      </Affix>            
           
    </>
  );
};
