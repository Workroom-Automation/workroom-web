import { apiClientType } from "./data/models/apiClientType.js";
import axios from "axios";
export async function ApiClient(
  type,
  baseUrl,
  urlExtension,
  params,
  headerParams
) {
  let headers = {
    "Content-Type": "application/json",
    ...(headerParams ? { ...headerParams } : null),
  };
  let requestOptions = {
    method: type,
    headers: headers,
  };
  if (type == apiClientType.get) {
    requestOptions["params"] = params;
  } else {
    requestOptions["data"] = params;
  }
  try {
    let response = await axios(`${baseUrl}${urlExtension}`, requestOptions);
    let status = await response.status;
    let res = await response.data;
    if (res) {
      return res;
    }
    return status;
  } catch (e) {
    console.log(e);
  }
}
