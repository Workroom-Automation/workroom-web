import React, { useState, useEffect } from "react";
import Card from "../../components/cards/defaultCard";
import "./style.css";
import SearchIcon from "remixicon-react/SearchLineIcon";
import BuildingLineIcon from "remixicon-react/Building3LineIcon";
import MoreIcon from "remixicon-react/More2LineIcon";
import CustomButton from "../../components/button";
import AddIcon from "remixicon-react/AddCircleLineIcon";
import AddNewModal from "../../components/modals/AddNewModal";
import SearchInput from "../../components/inputs/searchInput";
import { getAssetDetails, getAssets } from "./api";
export default function MasterDataTable({ type }) {
  const processes = [
    // { processName: "TY Sub Assembly", appCount: 11 },
    // { processName: "Knock Down Station", appCount: 1 },
    // { processName: "TY Sub Assembly", appCount: 11 },
    // { processName: "Knock Down Station", appCount: 1 },
    // { processName: "TY Sub Assembly", appCount: 11 },
    // { processName: "Knock Down Station", appCount: 1 },
    // { processName: "TY Sub Assembly", appCount: 11 },
    // { processName: "Knock Down Station", appCount: 1 },
  ];
  // const apps = [
  //   { name: "Light Duty Line ", id: "100001" },
  //   { name: "Heavy Duty Line ", id: "100003" },
  //   { name: "Light Duty Line ", id: "100001" },
  //   { name: "Heavy Duty Line ", id: "100003" },
  // ];
  const [apps, setApps] = useState();
  const fetchData = () => {
    if (type === "Lines") {
      getAssets(`LINE_ASSET`, (data) => setApps(data));
    }
    if (type === "Products") {
      getAssets(`PRODUCT_ASSET`, (data) => setApps(data));
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);
  const [selectedApp, setSelectedApp] = useState(0);
  const [addStepModal, setAddStepModal] = useState(false);
  if (apps?.length != 0)
    return (
      <div className="d-flex master-table">
        <div style={{ paddingRight: 0 }} className="col-3">
          <div
            className=""
            style={{
              border: "1px solid #DADADA",
              background: "#ffffff",
              borderRadius: "11px 0 0 0",
              height: "76px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchInput width="90%" />
          </div>
          <div
            style={{
              background: "#ffffff",
              overflowY: "auto",
              height: "500px",
            }}
          >
            {apps &&
              apps.length > 0 &&
              apps.map((app, index) => {
                return (
                  <div
                    onClick={() => setSelectedApp(index)}
                    style={{
                      background:
                        selectedApp === index
                          ? "rgba(208, 235, 255, 0.65)"
                          : "white",
                    }}
                    className="app-list-item"
                  >
                    <BuildingLineIcon size="52px" color="#7D7676" />
                    <div className="d-flex flex-column">
                      <b>{app.name}</b>
                      <span>Line ID: {app.id}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          style={{ paddingLeft: 0, background: "#ffffff" }}
          className="col-9 ml-0"
        >
          <div
            style={{ height: "76px", border: "1px solid #DADADA" }}
            className="d-flex justify-content-center align-items-center"
          >
            All Details
          </div>
          {apps && (
            <div
              style={{
                padding: "10px 12px 13px 7px",
                minHeight: "500px",
                borderLeft: "1px solid #DADADA",
              }}
            >
              <Card
                style={{ padding: "16px 35px 10px 29px" }}
                content={() => (
                  <AppSpecificationCard
                    lineID={apps && apps.length > 0 && apps[selectedApp].id}
                  />
                )}
              />
              <div className="d-flex justify-content-between">
                <span style={{ color: "#7D7676" }}>Process Steps: 05</span>
                <CustomButton
                  onClick={() => {
                    setAddStepModal(true);
                  }}
                  icon={() => <AddIcon size={20} color="#ffffff" />}
                  title="Add Process Step"
                  padding="7.5px 7px"
                  fontWeight="400"
                  color="#ffffff"
                  width="135px"
                  fontSize="12px"
                  background="gradient"
                />
              </div>
              <div style={{ marginTop: "19px" }}>
                {processes.map((process, index) => {
                  return (
                    <div
                      style={{ marginBottom: "30px" }}
                      className="processes-item d-flex align-items-center"
                      key={index}
                    >
                      <div>
                        <div className="process-number-circle">
                          {index + 1}
                          {index < processes.length - 1 ? (
                            <div
                              style={{
                                borderLeft:
                                  "1px solid rgba(125, 118, 118, 0.6)",
                                height: "89px",
                                margin: "8px 0 5px  11px",
                              }}
                            ></div>
                          ) : null}
                        </div>
                      </div>
                      <hr />
                      <Card
                        style={{
                          width: "100%",
                          marginBottom: 0,
                          height: "97px",
                          padding: "0 30px 0 29px",
                        }}
                        content={() => (
                          <div>
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                marginTop: "8px",
                                marginRight: "30px",
                              }}
                            >
                              <div style={{ transform: "rotate(-90deg)" }}>
                                <MoreIcon size={20} color="#7D7676" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <b>{process.processName}</b>
                              <span>
                                Apps:{" "}
                                <b style={{ textDecoration: "underline" }}>
                                  {process.appCount}
                                </b>
                              </span>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <AddNewModal
          header="New Process Step Details"
          buttonName="Create Process Step"
          show={addStepModal}
          setShow={setAddStepModal}
          inputs={[
            { label: `Process Step Name`, value: "stepName" },
            { label: `Process Step ID`, value: "stepId" },
          ]}
        />
      </div>
    );
  else return <center>No {type.slice(0, -1)} apps, ADD application</center>;
}

const AppSpecificationCard = ({ lineID }) => {
  const [details, setDetails] = useState();
  useEffect(() => {
    lineID &&
      getAssetDetails(lineID, (data) => {
        setDetails(data.asset);
      });
  }, []);

  return (
    <div className="d-flex justify-content-between">
      <div className="col-4 d-flex  justify-content-between">
        <div className="d-flex flex-column">
          <b>{details?.name}</b>
          <span>Line ID: {lineID}</span>
        </div>
        <div className="d-flex">
          <hr
            style={{
              width: "38px",
              transform: "rotate(-90deg)",
            }}
          />
          <div>
            Process Steps <br />
            <b style={{ color: "#009AFF" }}>06</b>
          </div>
        </div>
      </div>
      <div className="d-flex col-4 justify-content-end">
        <div style={{ marginRight: "44px" }} className="d-flex flex-column">
          Total Apps Linked
          <b style={{ color: "#009AFF" }}>06</b>
        </div>
        <CustomButton width="10px" icon={() => <MoreIcon color="#7D7676" />} />
      </div>
    </div>
  );
};
