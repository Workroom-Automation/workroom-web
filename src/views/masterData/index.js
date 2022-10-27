import React, { useState, useEffect } from "react";
import CustomButton from "../../components/button";
import ServerLineIcon from "remixicon-react/ServerLineIcon";
import Tabs from "../../components/tabs";
import AddIcon from "remixicon-react/AddCircleLineIcon";
import MasterDataTable from "./masterDataTable";
import AddNewModal from "../../components/modals/AddNewModal";
import ProductIcon from "remixicon-react/AppsLineIcon";
import LineIcon from "remixicon-react/Building3LineIcon";
import { createAsset, getAssets } from "./api";

export default function MasterData() {
  const [activeTab, setActiveTab] = useState(0);
  const [newAppModal, setNewAppModal] = useState(false);
  // const [newAssetForm, setNewAssetForm] = useState({ name: "" });
  const [selectedType, setSelectedType] = useState("Line");
  const [appData, setAppData] = useState({ line: [], product: [] });
  const tabList = ["Lines", "Products"];
  // useEffect(() => {
  
  //   getAssets(`LINE_ASSET`, (data) => setAppData({ ...appData, line: data }));
  //   getAssets(`PRODUCT_ASSET`, (data) =>
  //     setAppData({ ...appData, product: data })
  //   );
  // }, []);

  return (
    <div>
      <CustomButton
        title="Assets"
        icon={() => <ServerLineIcon color="#7D7676" />}
        width="100px"
        padding="15px 0"
      />
      <div
        className="d-flex justify-content-between"
        style={{ margin: "38px 34px 22px 0" }}
      >
        <div>
          <Tabs
            tabWidth="131px"
            tabHeight="50px"
            tabs={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div>
          <CustomButton
            onClick={() => {
              setNewAppModal(true);
            }}
            padding="12px 10px"
            color="#FFFFFF"
            background="gradient"
            title={`Add New ${tabList[activeTab]}`}
            icon={() => <AddIcon color="#ffffff" />}
          />
        </div>
      </div>
      {/* {tabList[activeTab] === "Lines" ? (
        <MasterDataTable apps={appData.line} type="Line" />
      ) : (
        <MasterDataTable apps={appData.product} type="Product" />
      )} */}

      <MasterDataTable type={tabList[activeTab]} />
      <AddNewModal
        header="New Asset Details"
        buttonName="Add Asset"
        show={newAppModal}
        setShow={setNewAppModal}
        onSubmit={(data) => {
          console.log(data);
          createAsset(
            {
              name: data.name,
              type: `${selectedType.toUpperCase()}_ASSET`,
            },
            () => {
              setNewAppModal(false);
            }
          );
        }}
        types={[
          { name: "Line", icon: () => <LineIcon color=" #7D7676" /> },
          { name: "Product", icon: () => <ProductIcon color=" #7D7676" /> },
        ]}
        inputs={[
          {
            label: `${selectedType} Name`,
            value: "name",
          },
          { label: `${selectedType} ID`, value: "id" },
        ]}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}
