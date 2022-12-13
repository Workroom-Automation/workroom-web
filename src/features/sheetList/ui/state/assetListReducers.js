import { assetListActionType } from "../../data/models/assetListActionType.js";

export const AssetListReducers = (state, action) => {
  switch (action.type) {
    case assetListActionType.loadingAssetList:
      let loadingObj = {
        loading: true,
        data: state.data,
        error: null,
      };
      return loadingObj;
    case assetListActionType.dataAssetList:
      let dataObj = {
        loading: false,
        data: action.data,
        error: null,
      };
      return dataObj;
    default:
      return state;
  }
};
