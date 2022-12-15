import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BillLineIcon from "remixicon-react/BillLineIcon";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useReducer } from "react";
import SingleSelectDropdown from "../../../../../common/components/singleSelectDropdown/ui/singleSelectDropdown.js";
import { DataFetchReducers } from "../../../../../common/states/dataFetch/dataFetchReducers.js";
import { dataFetchActionType } from "../../../../../common/states/dataFetch/dataFetchActionType.js";
import { apiClientType } from "../../../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../../../clients/apiClient.js";

export default function NewSheetDetailsModal(props) {
  const [sheetName, setSheetName] = useState(props.value.sheet?.name);
  const [selectedAsset, setSelectedAsset] = useState({});
  const [selectedProcess, setSelectedProcess] = useState({});
  const [sheetDescription, setSheetDescription] = useState(
    props.value.sheet?.description
  );
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
  return (
    <Modal {...props} size="md" style={{ marginTop: "200px" }}>
      <Modal.Header>
        <Modal.Title style={{ fontWeight: "bold" }}>
          <BillLineIcon style={{ marginBottom: "5px" }} />
          <span style={{ marginLeft: "10px" }}>New Sheet Details</span>
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.onSubmitModal({
            name: sheetName,
            description: sheetDescription,
            asset_id: `${selectedAsset.id}`,
            process_id: `${selectedProcess.id}`,
            external_code: "Kuch bhi",
            application_id: "1",
            is_active: true,
          });
        }}
      >
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Sheet Name</Form.Label>
              <Form.Control
                defaultValue={sheetName}
                onChange={(e) => setSheetName(e.target.value)}
                placeholder="Sheet Name"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Sheet Description</Form.Label>
            <Form.Control
              defaultValue={sheetDescription}
              onChange={(e) => setSheetDescription(e.target.value)}
              placeholder="Sheet Description"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Asset</Form.Label>
              <br />
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
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Sub-Asset</Form.Label>
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
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Start Authoring</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
