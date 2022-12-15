import { useState, useReducer, useEffect } from "react";
// import SearchInput from "../../components/inputs/searchInput";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
// import PeopleTable from "../people/peopleTable";
// import CustomModal from "../../components/modals";
import DragdropIcon from "remixicon-react/DragDropLineIcon";
// import { AppSquareIcon } from "../../assets/icons";
// import CustomTextInput from "../../components/inputs/textInput";
import BillIcon from "remixicon-react/BillLineIcon";
import { useNavigate, useParams } from "react-router-dom";
import SheetTable from "../components/sheetTable/ui/sheetTable.js";
import SingleSelectDropdown from "../../../common/components/singleSelectDropdown/ui/singleSelectDropdown.js";
import ToggleButton from "../components/toggleButton.js";
import PrimaryButton from "../components/primaryButton.js";
import { DataFetchReducers } from "../../../common/states/dataFetch/dataFetchReducers.js";
import { dataFetchActionType } from "../../../common/states/dataFetch/dataFetchActionType.js";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";

export default function SheetList() {
  let params = useParams();
  const [selectedAsset, setSelectedAsset] = useState({});
  const [selectedProcess, setSelectedProcess] = useState({});
  const [sheets, dispatchSheets] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  const [assets, dispatchAssets] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  const [processes, dispatchProcesses] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    (async () => {
      dispatchSheets({
        type: dataFetchActionType.loading,
      });
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_SHEETS_BASE_URL,
        `/sheet`,
        {
          limit: 50,
          offset: 0,
          ...(selectedAsset.id ? { asset_id: selectedAsset.id } : null),
          ...(selectedProcess.id ? { process_id: selectedProcess.id } : null),
          application_id: params.appId,
        }
      );
      console.log(response);
      if (response) {
        dispatchSheets({
          type: dataFetchActionType.data,
          data: response,
        });
      }
    })();
  }, [selectedAsset, selectedProcess]);

  useEffect(() => {
    (async () => {
      dispatchAssets({
        type: dataFetchActionType.loading,
      });
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_MASTER_BASE_URL,
        `/asset`,
        {
          type: "LINE_ASSET",
        }
      );
      console.log(response);
      if (response) {
        dispatchAssets({
          type: dataFetchActionType.data,
          data: response,
        });
      }
    })();
  }, []);

  const getProcesses = async (assetId) => {
    if (assetId) {
      dispatchProcesses({ type: dataFetchActionType.loading });
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_MASTER_BASE_URL,
        `/asset/${assetId}`,
        {
          includeProcess: true,
        }
      );
      console.log(response);
      if (response) {
        dispatchProcesses({
          type: dataFetchActionType.data,
          data: response.mapping,
        });
      }
    } else {
      dispatchProcesses({
        type: dataFetchActionType.data,
        data: [],
      });
    }
  };
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
                setSelectedProcess({});
                getProcesses(value.id);
              },
              extractDataFromList: (item) => {
                return { id: item.id, name: item.name };
              },
            }}
          />
          <SingleSelectDropdown
            value={{
              state: processes,
              buttonText: selectedProcess.id
                ? selectedProcess.name
                : "Select Sub-Asset",
              selectValue: (value) => {
                setSelectedProcess(value);
              },
              extractDataFromList: (item) => {
                return {
                  id: item.position,
                  name: item.process.process_name,
                };
              },
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
              navigate(`/appbuilder/${params.appId}/authorsheet/new`);
            },
          }}
        />
      </div>
      <SheetTable value={{ sheets: sheets, assets: assets.data }} />

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
      }
    </div>
  );
}
