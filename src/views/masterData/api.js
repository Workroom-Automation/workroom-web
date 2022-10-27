import apiClient from "../../apis/api-client";
import apiUrls from "../../apis/apis";

const createAsset = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.post(
      apiUrls.masterData.createAssets,
      dataToSend
    );
    successCallback();
  } catch (e) {
    console.log(e);
  }
};
const getAssets = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.get(
      apiUrls.masterData.getAssets(dataToSend)
    );
    successCallback(data);
  } catch (e) {
    console.log(e);
  }
};
const getAssetDetails = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.get(
      apiUrls.masterData.getAssetDetails(dataToSend)
    );
    successCallback(data);
  } catch (e) {
    console.log(e);
  }
};
export { createAsset, getAssets, getAssetDetails };
