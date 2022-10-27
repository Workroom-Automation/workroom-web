const apiBaseUrl="http://146.190.10.111/"
const apiUrls={
    workroom:{
        get:"api/v1/workroom/",
        create:"/api/v1/workroom/",
        apps:{
            get: (workroomId) => `/api/v1/application?workroom_id=${workroomId}`,
            create: '/api/v1/application'
        }
    },
    masterData:{
        getAssets: (type)=>`/api/v1/asset?type=${type}`,
        createAssets: '/api/v1/asset',
        getAssetDetails: (assetId)=>`/api/v1/asset/${assetId}`,
        attachProcess:`/api/v1/asset/process`,
        detachProcess:`/api/v1/asset/process`,
    }
    
}

export {apiBaseUrl}
export default apiUrls;