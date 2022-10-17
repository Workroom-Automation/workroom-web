import React from "react";
import CustomModal from ".";
import CustomButton from "../button";

export default function AddNewModal({
  show = false,
  setShow = () => {},
  types = [],
  selectedType = "",
  setSelectedType = () => {},
  inputs = [],
  onSubmit = () => {},
  buttonName = "Add New",
  header = "Add New",

}) {
  return (
    <div>
      <CustomModal
        show={show}
        setShow={setShow}
        body={() => (
          <div>
            <div className="d-flex align-items-center">
              {types.map((type, index) => {
                return (
                  <div  style={{ marginRight: "5px" }} key={index}>
                    <input
                      onChange={() => setSelectedType(type.name)}
                      type="radio"
                      name="type"
                      value={type}
                      checked={selectedType === type.name}
                    />
                    <label  style={{ margin: "0 8px 0 5px" }}>
                      {type.icon && type.icon()}
                      <span style={{ marginLeft: "5px" }}>{type.name}</span>
                    </label>
                  </div>
                );
              })}
              {/* <input
                onChange={() => setType("workforce")}
                checked={type === "workforce" ? true : false}
                type="radio"
              />
              <label style={{ margin: "0 8px 0 5px" }}>
                <WorkerIcon />
                <span style={{ marginLeft: "5px" }}>Workforce</span>
              </label>
              <input
                onChange={() => setType("supplier")}
                checked={type === "supplier" ? true : false}
                type="radio"
              />
              <label style={{ marginLeft: "5px" }}>
                <BuildingIcon color="#7D7676" /> <span>Supplier</span>
              </label> */}
            </div>
            <div style={{ marginTop: "21px" }}>
              {inputs.map((input, index) => {
                return (
                  <div key={index} className="add-user-input">
                    <label>{input.label}</label>
                    <input />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        header={() => (
          <div style={{ fontWeight: "700", fontSize: "20px" }}>
            {header}
          </div>
        )}
        footer={() => (
          <div
            style={{ marginBottom: "22px" }}
            className="d-flex justify-content-center"
          >
            <div className="col-3">
            <CustomButton
              padding="10px 15px"
              color="#ffffff"
            //   width="132px"
              background="gradient"
              title={buttonName}
            /></div>
          </div>
        )}
      />
    </div>
  );
}
