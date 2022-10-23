const apiBaseUrl="http://146.190.10.111/"
const apiUrls={
    workroom:{
        get:"api/v1/workroom/",
        create:"/api/v1/workroom/",
        apps:{
            get: (workroomId) => `/api/v1/application?workroom_id=${workroomId}`,
            create: '/api/v1/application'
        }
    }
    
}

export {apiBaseUrl}
export default apiUrls;