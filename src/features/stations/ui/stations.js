import { useState, useEffect, useReducer } from "react";
import SecondaryButton from "../../../common/crunches/secondaryButton/secondaryButton.js";
import PrimaryButton from "../../../common/crunches/primaryButton/primaryButton.js";
import PrimaryCountButton from "../../../common/crunches/primaryCountButton/primaryCountButton.js";
import Container from "react-bootstrap/Container";
import StationCard from "../components/stationCard/ui/stationCard.js";
import Building3LineIcon from "remixicon-react/Building3LineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";
import { DataFetchReducers } from "../../../common/states/dataFetch/dataFetchReducers.js";
import { dataFetchActionType } from "../../../common/states/dataFetch/dataFetchActionType.js";
import AddStationModal from "../components/addStationModal/ui/addStationModal.js";
import StationDetailsModal from "../components/stationDetailsModal/ui/stationDetailsModal.js";

export default function Stations() {
  const [selectedStation, setSelectedStation] = useState();
  const [showStationModal, setShowStationModal] = useState(false);
  const [showStationDetailsModal, setShowStationDetailsModal] = useState(false);
  const [stationList, dispatchStationList] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    getStationList();
  }, []);
  const getStationList = async () => {
    dispatchStationList({
      type: dataFetchActionType.loading,
    });
    let response = await ApiClient(
      apiClientType.get,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/station/`,
      {}
    );
    console.log(response);
    dispatchStationList({
      type: dataFetchActionType.data,
      data: response,
    });
  };
  const createStation = async (values) => {
    let response = await ApiClient(
      apiClientType.post,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/station/`,
      values
    );
    console.log(response);
  };
  const updateStation = async (values) => {
    let response = await ApiClient(
      apiClientType.patch,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/station/${selectedStation.id}`,
      values
    );
    console.log(response);
  };
  return (
    <Container fluid={true} style={{ padding: "40px" }}>
      <AddStationModal
        value={{
          onSubmitModal: async (values) => {
            await createStation(values);
            setShowStationModal(false);
            await getStationList();
          },
          show: showStationModal,
          onHide: () => {
            setShowStationModal(false);
          },
        }}
      />
      <StationDetailsModal
        value={{
          selectedStation: selectedStation,
          onSubmitModal: async (values) => {
            await updateStation(values);
            await getStationList();
          },
          show: showStationDetailsModal,
          onHide: () => {
            setShowStationDetailsModal(false);
          },
        }}
      />
      <SecondaryButton
        value={{
          child: (
            <>
              <Building3LineIcon
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  color: "#7D7676",
                }}
              />
              Master Data | Stations
            </>
          ),
        }}
      />
      <div
        style={{
          marginTop: "30px",
          marginBottom: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PrimaryCountButton
          value={{
            child: <>Total Stations</>,
            count:
              stationList?.data?.length >= 10
                ? stationList.data.length
                : stationList?.data?.length == undefined
                ? `00`
                : `0${stationList?.data?.length}`,
          }}
        />
        <PrimaryButton
          value={{
            child: (
              <>
                <AddLineIcon
                  style={{
                    marginRight: "10px",
                    marginBottom: "3px",
                  }}
                />
                New Station
              </>
            ),
            onClick: () => {
              setShowStationModal(true);
            },
          }}
        />
      </div>
      <Row>
        {stationList.loading == true ? (
          <>...loading</>
        ) : (
          <>
            {stationList?.data?.map((item, index) => {
              return (
                <Col
                  onClick={() => {
                    setSelectedStation(item);
                    setShowStationDetailsModal(true);
                  }}
                  key={item.id}
                  md={6}
                  style={{ marginTop: "15px", cursor: "pointer" }}
                >
                  <StationCard value={{ station: item }} />
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </Container>
  );
}
