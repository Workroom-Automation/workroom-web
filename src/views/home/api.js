import apiClient from "../../apis/api-client";
import apiUrls from "../../apis/apis";
import { extractValues } from "../../utils";

const createWorkroom = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const adminUsers = extractValues(dataToSend?.admins);
    const { data = {} } = await apiClient.post(apiUrls.workroom.create, {
      name: dataToSend.name,
      admin: [...adminUsers],
    });
    successCallback();
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getWorkrooms = async (
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.get(apiUrls.workroom.get);
    console.log(data, "ff");
    successCallback(data.workrooms);
  } catch (e) {
    console.log(e.message);
  }
};
const getWorkroomApps = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const { data = {} } = await apiClient.get(
      apiUrls.workroom.apps.get(dataToSend.workroom_id)
    );
    successCallback(data);
  } catch (e) {
    console.log(e);
  }
};
const createWorkroomApp = async (
  dataToSend,
  successCallback = () => {},
  failCallback = () => {}
) => {
  try {
    const users = extractValues(dataToSend?.user);
    const { data = {} } = await apiClient.post(apiUrls.workroom.apps.create, {
      ...dataToSend,
      user: [...users],
    });
    console.log(data);
    successCallback();
  } catch (e) {
    console.log(e);
  }
};
export { createWorkroom, getWorkrooms, getWorkroomApps, createWorkroomApp };
