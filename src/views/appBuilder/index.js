import React from "react";
import CustomButton from "../../components/button";
import CustomDropdown from "../../components/dropdown";
import SearchInput from "../../components/inputs/searchInput";
import Tabs from "../../components/tabs";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import PeopleTable from "../people/peopleTable";
import CustomTable from "../../components/tables";
export default function AppBuilder() {
  const tabs = ["Sheets", "Workflow"];
  const [activeTab, setActiveTab] = React.useState(0);
  const sampleOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const dropdownStyles = {
    container: (provided, state) => {
      {
        return {
          ...provided,
          paddingRight: 0,
          minWidth: "200px",
         
        };
      }
    },
    multiValue: (provided, state) => {
      return {
        ...provided,
        backgroundColor: "transparent",
        padding: "0 8px",
        fontSize: "14px",
      };
    },

    control: (provided, state) => {
      return {
        ...provided,
        minHeight: "52px",
        outline: "none",
        border: "1px solid #DADADA",
        borderRadius: "11px 0 0 11px",
      };
    },
    menuList: (provided, state) => {
      return {
        ...provided,
        borderRadius:'11px'
      };
    },
    option: (provided, state) => {
      console.log(state,"states")
      return {
        ...provided,
        backgroundColor: state.isFocused ? "#D0EBFF" : "white",
        color: "#000000" ,
        borderBottom: "1px solid #DADADA",
      };
    },
    
  };
  const dropdownStyles1={
    ...dropdownStyles,
    control: (provided, state) => {
      return {
        ...provided,
        minHeight: "52px",
        outline: "none",
        border: "1px solid #DADADA",
        borderRadius: "0 11px 11px 0",
      };
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <SearchInput height="52.4px" width="25%" background="#ffffff" />
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "40px" }}
      >
        <div className="d-flex">
          <Tabs
            tabWidth="130px"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            style={{ marginRight: "30px" }}
          />
          <CustomDropdown
            value={sampleOptions[0]}
            styles={dropdownStyles}
            options={sampleOptions}
          />
          <CustomDropdown
            value={sampleOptions[0]}
            styles={dropdownStyles1}
            options={sampleOptions}
          />
        </div>
        <CustomButton
          icon={() => <AddCircleLineIcon color="#ffffff" />}
          color="#ffffff"
          width="172px"
          background="gradient"
          title="Author New Sheet"
          margin="0 42px 0 0 "
        />
      </div>
      <div style={{ margin: "15px 42px 0 0" }}>
        <CustomTable
          internalBorder={true}
          headerStyle={{
            borderLeft: "1px solid #DADADA",
            fontWeight: "700",
            color: "#000000",
          }}
          columns={[
            { title: "Sheet ID", dataIndex: "sheetId" },
            { title: "Sheet Name", dataIndex: "sheetName" },
            { title: "Linked Asset", dataIndex: "linkedAsset" },
            { title: "Sub-Asset", dataIndex: "subAsset" },
            { title: "Steps", dataIndex: "steps" },
            { title: "Version", dataIndex: "version" },
          ]}
          data={[
            {
              sheetId: "1",
              sheetName: "The First",
              linkedAsset: "Propeller Shaft",
              subAsset: "Post-Production QA  ",
              steps: "3",
              version: "1.0",
            },
            {
              sheetId: "2",
              sheetName: "The Second",
              linkedAsset: "Propeller Shaft",
              subAsset: "Post-Production QA  ",
              steps: "31",
              version: "99.0",
            },
          ]}
        />
        {/* <PeopleTable
          columns={[
            { title: "Sheet ID", dataIndex: "sheetId" },
            { title: "Sheet Name", dataIndex: "sheetName" },
            { title: "Linked Asset", dataIndex: "linkedAsset" },
            { title: "Sub-Asset", dataIndex: "subAsset" },
            { title: "Steps", dataIndex: "steps" },
            { title: "Version", dataIndex: "version" },
          ]}
        /> */}
      </div>
    </div>
  );
}
