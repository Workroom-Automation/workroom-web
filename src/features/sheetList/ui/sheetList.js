import { useState, useReducer, useEffect } from "react";
// import SearchInput from "../../components/inputs/searchInput";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
// import PeopleTable from "../people/peopleTable";
// import CustomModal from "../../components/modals";
import DragdropIcon from "remixicon-react/DragDropLineIcon";
// import { AppSquareIcon } from "../../assets/icons";
// import CustomTextInput from "../../components/inputs/textInput";
import BillIcon from "remixicon-react/BillLineIcon";
import { useNavigate } from "react-router-dom";
import SheetTable from "../components/sheetTable/ui/sheetTable.js";
import SingleSelectDropdown from "../components/singleSelectDropdown/ui/singleSelectDropdown.js";
import ToggleButton from "../components/toggleButton.js";
import PrimaryButton from "../components/primaryButton.js";
import { SheetListReducers } from "./state/sheetListReducers.js";
import { sheetListActionType } from "../data/models/sheetListActionType.js";
import { AssetListReducers } from "./state/assetListReducers.js";
import { assetListActionType } from "../data/models/assetListActionType.js";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";

export default function SheetList() {
  const [selectedAsset, setSelectedAsset] = useState({});
  const [sheets, dispatchSheets] = useReducer(SheetListReducers, {
    data: null,
    loading: false,
    error: null,
  });
  const [assets, dispatchAssets] = useReducer(AssetListReducers, {
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    (async () => {
      dispatchSheets({ type: sheetListActionType.loadingSheetList });
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_SHEETS_BASE_URL,
        `/sheet`,
        {
          limit: 50,
          offset: 0,
          ...(selectedAsset.id ? { asset_id: selectedAsset.id } : null),
        }
      );
      console.log(response);
      if (response) {
        dispatchSheets({
          type: sheetListActionType.dataSheetList,
          data: response,
        });
      }
    })();
  }, [selectedAsset]);

  useEffect(() => {
    (async () => {
      dispatchAssets({ type: assetListActionType.loadingAssetList });
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_ASSETS_BASE_URL,
        `/asset`,
        {
          type: "LINE_ASSET",
        }
      );
      console.log(response);
      if (response) {
        dispatchAssets({
          type: assetListActionType.dataAssetList,
          data: response,
        });
      }
    })();
  }, []);

  let navigate = new useNavigate();
  return (
    <div style={{ marginRight: "42px" }}>
      {
        // <div className="d-flex justify-content-center">
        // <SearchInput height="52.4px" width="25%" background="#ffffff" />
        // </div>
      }
      <div
        style={{ marginTop: "150px", display: "flex", alignItems: "baseline" }}
      >
        <ToggleButton />
        <div style={{ flexGrow: 1 }}>
          <SingleSelectDropdown
            value={{
              state: assets,
              buttonText: selectedAsset.id
                ? selectedAsset.name
                : "Select Asset",
              selectValue: (value) => {
                setSelectedAsset(value);
              },
            }}
          />
          <SingleSelectDropdown
            value={{
              state: {},
              buttonText: selectedAsset.id
                ? selectedAsset.name
                : "Select Sub-Asset",
            }}
          />
        </div>
        <PrimaryButton
          value={{
            child: (
              <>
                <AddCircleLineIcon
                  style={{ marginRight: "10px", marginBottom: "2px" }}
                />
                <span>Author New Sheet</span>
              </>
            ),
            onClick: () => {
              navigate("/appbuilder/authorsheet/sheets");
            },
          }}
        />
        {
          // <CustomButton
          //   onClick={() => {
          //     navigate("/appbuilder/authorsheet/sheets");
          //   }}
          //   icon={() => <AddCircleLineIcon color="#ffffff" />}
          //   color="#ffffff"
          //   width="172px"
          //   background="gradient"
          //   title="Author New Sheet"
          //   margin="0 42px 0 0 "
          // />
        }
      </div>

      <SheetTable value={{ sheets, assets }} />

      {
        // <CustomModal
        //   show={authorSheetModal}
        //   setShow={setAuthorSheetModal}
        //   // size="md"
        //   body={() => {
        //     return (
        //       <center style={{ padding: "0 100px" }}>
        //         <div style={{ fontSize: "16px", margin: "33px 0 48px 0" }}>
        //           How do you want to start?
        //         </div>
        //         <div className="row justify-content-between">
        //           <div className="col-6">
        //             <CustomButton
        //               onClick={() => {
        //                 setAuthorSheetModal(false);
        //                 setSheetDetailModal(true);
        //               }}
        //               background="gradient"
        //               width="100px"
        //               height="90px"
        //               icon={() => <DragdropIcon size="45px" color="#ffffff" />}
        //             />
        //             <div style={{ fontSize: "16px", marginTop: "24px" }}>
        //               <b>Author from Scratch</b>
        //
        //               <p style={{ marginTop: "8px" }}>
        //                 Build a sheet by dragging & dropping using the authoring
        //                 module, from scratch
        //               </p>
        //             </div>
        //           </div>
        //           <div className="col-6">
        //             <CustomButton
        //               background="gradient"
        //               width="100px"
        //               height="90px"
        //               icon={() => <AppSquareIcon size="44px" />}
        //             />
        //             <div style={{ fontSize: "16px", marginTop: "24px" }}>
        //               <b>Choose from Templates</b>
        //
        //               <p style={{ marginTop: "8px" }}>
        //                 Choose an already built sheet from our extensive sheets
        //                 library and edit on top of it
        //               </p>
        //             </div>
        //           </div>
        //         </div>
        //       </center>
        //     );
        //   }}
        // />
        // <CustomModal
        //   show={sheetDetailModal}
        //   setShow={setSheetDetailModal}
        //   body={() => {
        //     return (
        //       <div>
        //         <div
        //           style={{
        //             background: "#D0EBFF",
        //             borderRadius: "11px 11px 0 0",
        //             padding: "19px 0",
        //           }}
        //           className="d-flex justify-content-center"
        //         >
        //           <BillIcon color=" #09121F" />
        //           &nbsp; New Sheet Details
        //         </div>
        //         <div style={{ padding: "25px" }}>
        //           <CustomTextInput title="Sheet Name" />
        //           <CustomTextInput
        //             style={{ margin: "10px 0" }}
        //             title="Sheet Name"
        //           />
        //           <div className="row">
        //             <CustomTextInput className="col-6" title="Asset" />
        //             <CustomTextInput className="col-6" title="Sub-Asset" />
        //           </div>
        //         </div>
        //         <div
        //           style={{ margin: "28px 0 25px 0" }}
        //           className="d-flex justify-content-center"
        //         >
        //           <div className="col-3">
        //             <CustomButton
        //               onClick={() => {
        //                 navigate("/appbuilder/authorsheet/2");
        //               }}
        //               padding="10px 15px"
        //               color="#ffffff"
        //               background="gradient"
        //               title="Start Authoring"
        //             />
        //           </div>
        //         </div>
        //       </div>
        //     );
        //   }}
        // />
      }
    </div>
  );
}
