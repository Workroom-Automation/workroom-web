import React, { useState, useEffect } from "react";
import CustomModal from ".";
import CustomButton from "../button";
import { useForm } from "react-hook-form";
const Body = ({
  types,
  inputs,
  selectedType,
  setSelectedType,
  register,
  handleSubmit,
  onSubmit,
  buttonName,
}) => (
  <div>
    <div className="d-flex align-items-center">
      {types.map((type, index) => {
        return (
          <div style={{ marginRight: "5px" }} key={index}>
            <input
              onChange={() => setSelectedType(type.name)}
              type="radio"
              name="type"
              value={type}
              checked={selectedType === type.name}
            />
            <label style={{ margin: "0 8px 0 5px" }}>
              {type.icon && type.icon()}
              <span style={{ marginLeft: "5px" }}>{type.name}</span>
            </label>
          </div>
        );
      })}
    </div>
    <div style={{ marginTop: "21px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, index) => {
          return (
            <div
              style={{ marginBottom: "7px" }}
              key={index}
              className="add-user-input"
            >
              <label>{input.label}</label>
              <input
                type="text"
                name={input.value}
                {...register(input.value, { required: true })}
              />
            </div>
          );
        })}
        <div
          style={{ margin: "22px 0" }}
          className="d-flex justify-content-center"
        >
          <div className="col-3">
            <CustomButton
              type="submit"
              // onClick={() => handleSubmit(onSubmit)}
              padding="10px 15px"
              color="#ffffff"
              //   width="132px"
              background="gradient"
              title={buttonName}
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);

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
  const { register, handleSubmit, errors, reset } = useForm();
  useEffect(()=>{
    reset();
  },[show])
  return (
    <div>
      <CustomModal
        show={show}
        setShow={setShow}
        body={() => (
          <Body
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
            inputs={inputs}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            types={types}
            buttonName={buttonName}
          />
        )}
        header={() => (
          <div style={{ fontWeight: "700", fontSize: "20px" }}>{header}</div>
        )}
        footer={() => <div></div>}
      />
    </div>
  );
}
