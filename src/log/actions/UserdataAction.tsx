import {
  REQUEST_USERDATA,
  REQUEST_USERDATA_ONLOAD,
  REQUEST_USER_INFO_UPDATE,
  REQUEST_PROFILE_UPDATE,
  REQUEST_BILLBOARD_UPDATE,
  REQUEST_BILLBOARD_UPDATE2,
  REQUEST_MEMBER,
  REQUEST_MEMBERDATA,
} from "../log_ActionTypes";

export function UserdataAction(ServerPayload: any) {
  return {
    type: REQUEST_USERDATA,
    payload: ServerPayload,
  };
}

export function UserdataActionOnLoad(ServerPayload: any) {
  return {
    type: REQUEST_USERDATA_ONLOAD,
    payload: ServerPayload,
  };
}

export function UserInfoUpdateAction(data: any) {
  return {
    type: REQUEST_USER_INFO_UPDATE,
    payload: data,
  };
}

export function UserInfoUpdatePROFILE(data: any) {
  return {
    type: REQUEST_PROFILE_UPDATE,
    payload: data,
  };
}

export function UserInfoUpdateMEMBERDATA(data: any) {
  return {
    type: REQUEST_MEMBERDATA,
    payload: data,
  };
}

export function UserInfoUpdateMEMBER(data: number) {
  return {
    type: REQUEST_MEMBER,
    payload: data,
  };
}

export function UserInfoUpdateBILLBOARD(data: any, typex: any) {
  if (typex === 2) {
    return {
      type: REQUEST_BILLBOARD_UPDATE2,
      payload: data,
    };
  } else {
    return {
      type: REQUEST_BILLBOARD_UPDATE,
      payload: data,
    };
  }
}
