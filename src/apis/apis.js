const apiBaseUrl = process.env.REACT_APP_MASTER_BASE_URL;
const apiUrls = {
  workroom: {
    get: "/workroom/",
    create: "/workroom/",
    apps: {
      get: (workroomId) => `/application/?workroom_id=${workroomId}`,
      create: "/application/",
    },
  },
  masterData: {
    getAssets: (type) => `/asset?type=${type}`,
    createAssets: "/asset",
    getAssetDetails: (assetId) => `/asset/${assetId}`,
    attachProcess: `/asset/process`,
    detachProcess: `/asset/process`,
  },
};

export { apiBaseUrl };
export default apiUrls;
