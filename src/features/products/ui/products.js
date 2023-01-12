import { useState, useEffect, useReducer } from "react";
import SecondaryButton from "../../../common/crunches/secondaryButton/secondaryButton.js";
import PrimaryButton from "../../../common/crunches/primaryButton/primaryButton.js";
import PrimaryCountButton from "../../../common/crunches/primaryCountButton/primaryCountButton.js";
import Container from "react-bootstrap/Container";
import ProductTable from "../components/productTable/ui/productTable.js";
import AddProductModal from "../components/addProductModal/ui/addProductModal.js";
import AddProcessModal from "../components/addProcessModal/ui/addProcessModal.js";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";
import ServerLineIcon from "remixicon-react/ServerLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import { DataFetchReducers } from "../../../common/states/dataFetch/dataFetchReducers.js";
import { dataFetchActionType } from "../../../common/states/dataFetch/dataFetchActionType.js";

export default function Products() {
  const [isEditProductModal, setIsEditProductModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [productList, dispatchProductList] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  const [stationList, dispatchStationList] = useReducer(DataFetchReducers, {
    data: null,
    loading: false,
    error: null,
  });
  const [productDetails, dispatchProductDetails] = useReducer(
    DataFetchReducers,
    {
      data: null,
      loading: false,
      error: null,
    }
  );
  useEffect(() => {
    (async () => {
      let a = await getProductList();
      getProductDetails(a?.id);
    })();
  }, []);

  const getProductList = async () => {
    dispatchProductList({
      type: dataFetchActionType.loading,
    });
    let response = await ApiClient(
      apiClientType.get,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/asset/`,
      {}
    );
    console.log(response);
    dispatchProductList({
      type: dataFetchActionType.data,
      data: response,
    });
    return response[0];
  };
  const createProduct = async (values) => {
    let response = await ApiClient(
      apiClientType.post,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/asset/`,
      values
    );
    console.log(response);
  };
  const editProduct = async (values) => {
    let response = await ApiClient(
      apiClientType.put,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/asset/${productDetails.data.id}`,
      values
    );
    console.log(response);
  };
  const getProductDetails = async (productId) => {
    dispatchProductDetails({
      type: dataFetchActionType.loading,
    });
    let response = await ApiClient(
      apiClientType.get,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/aggregated/product/${productId}`,
      {}
    );
    console.log(response);
    dispatchProductDetails({
      type: dataFetchActionType.data,
      data: response,
    });
  };
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
  const createProcess = async (values) => {
    values = { ...values, asset_id: productDetails.data?.id };
    if (productDetails.data.processes.length != 0) {
      values["after_process_name"] =
        productDetails.data.processes[
          productDetails.data.processes.length - 1
        ].process_name;
    } else {
      values["after_process_name"] = "";
    }
    let response = await ApiClient(
      apiClientType.post,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/asset/process`,
      values
    );
    console.log(response);
  };
  return (
    <Container fluid={true} style={{ padding: "40px 40px 0px 40px" }}>
      <AddProductModal
        value={{
          productDetails: productDetails.data,
          isEdit: isEditProductModal,
          onEditModal: async (values) => {
            await editProduct(values);
            await getProductList();
            await getProductDetails(productDetails.data.id);
          },
          onSubmitModal: async (values) => {
            await createProduct(values);
            await getProductList();
          },
          show: showProductModal,
          onHide: () => {
            setShowProductModal(false);
          },
          removeEdit: () => {
            setIsEditProductModal(false);
          },
        }}
      />
      <AddProcessModal
        value={{
          onSubmitModal: async (values) => {
            await createProcess(values);
            setShowProcessModal(false);
            await getProductDetails(productDetails.data.id);
          },
          show: showProcessModal,
          onHide: () => {
            setShowProcessModal(false);
          },
          stationList: stationList,
        }}
      />
      <SecondaryButton
        value={{
          child: (
            <>
              <ServerLineIcon
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  color: "#7D7676",
                }}
              />
              Master Data | Assets
            </>
          ),
          onClick: () => {},
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
            child: <>Total Products</>,
            count:
              productList?.data?.length >= 10
                ? productList.data.length
                : productList?.data?.length == undefined
                ? `00`
                : `0${productList?.data?.length}`,
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
                New Product
              </>
            ),

            onClick: () => {
              setShowProductModal(true);
            },
          }}
        />
      </div>
      <ProductTable
        value={{
          productList: productList,
          productDetails: productDetails.data,
          onSelectProduct: (id) => {
            getProductDetails(id);
          },
          onShowProcessModal: () => {
            setShowProcessModal(true);
            getStationList();
          },
          onShowProductModal: () => {
            setShowProductModal(true);
            setIsEditProductModal(true);
          },
        }}
      />
    </Container>
  );
}
