import {
  UPDATE_SCREEN_HEIGHT,
  UPDATE_DARKMODE,
  UPDATE_DARKMODETOGGLE,
  UPDATE_REMEMBERMETOGGLE,
  UPDATE_GLOBAL_COLOR,
  UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY,
  HIDE_GLOBAL_LOADER,
  ACTIVATE_GLOBAL_LOADER,
  CHANGE_OPTIONS_TOP,
  CHANGE_NAV_FILTER,
  CHANGE_NAV_CROP,
  UPDATE_SNAP,
  UPDATE_ALERT,
  UPDATE_LOADER,
  UPDATE_HISCROLL,
  UPDATE_COMMENT_HISCROLL,
  HIPOSTDATA_FROMCOM,
  UPDATE_COMSCROLL,
  UPDATE_HIREACTION_TYPE,
  CHANGE_UPLOAD_DATA
} from "./global_ActionTypes";

export function DarkmodeAction(newDarkModeData: boolean) {
  return {
    type: UPDATE_DARKMODE,
    payload: newDarkModeData,
  };
}

export function SnapToggleAction(Payload: boolean) {
  return {
    type: UPDATE_SNAP,
    payload: Payload,
  };
}

export function DarkmodeToggleAction() {
  return {
    type: UPDATE_DARKMODETOGGLE,
  };
}

export function screenHeightAction(sreenHeightData: number) {
  return {
    type: UPDATE_SCREEN_HEIGHT,
    payload: sreenHeightData,
  };
}

export function rememberMeAction(Payload: boolean) {
  return {
    type: UPDATE_REMEMBERMETOGGLE,
    payload: Payload,
  };
}

export function UpdateColorAction(colorPayload: any, typex: any) {
  if (typex === 1) {
    return {
      type: UPDATE_GLOBAL_COLOR,
      payload: colorPayload,
    };
  } else {
    return {
      type: UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY,
      payload: colorPayload,
    };
  }
}

export function ActivateLoaderAction() {
  return {
    type: ACTIVATE_GLOBAL_LOADER,
  };
}

export function HideLoaderAction() {
  return {
    type: HIDE_GLOBAL_LOADER,
  };
}

export function UpdateOptionsTop(Payload: boolean) {
  return {
    type: CHANGE_OPTIONS_TOP,
    payload: Payload,
  };
}

export function UpdateNavFilterReducer(Payload: boolean) {
  return {
    type: CHANGE_NAV_FILTER,
    payload: Payload,
  };
}

export function UpdateNavCropReducer(Payload: boolean) {
  return {
    type: CHANGE_NAV_CROP,
    payload: Payload,
  };
}

export function UpdateAlertReducer(Payload: any, emotype: number) {
  return {
    type: UPDATE_ALERT,
    payload: Payload,
    payload2: emotype,
  };
}

export function UpdateHistory(Payload: any) {
  return {
    type: UPDATE_HISCROLL,
    payload: Payload,
  };
}

export function UpdateLoader(Payload: boolean) {
  return {
    type: UPDATE_LOADER,
    payload: Payload,
  };
}

export function UpdateCommentHistory(Payload: any, payload2: any) {
  return {
    type: UPDATE_COMMENT_HISCROLL,
    payload: Payload,
    payload2: payload2,
  };
}

export function UpdatePostFromCom(Payload: any) {
  return {
    type: HIPOSTDATA_FROMCOM,
    payload: Payload,
  };
}

export function UpdateComData(Payload: any) {
  return {
    type: UPDATE_COMSCROLL,
    payload: Payload,
  };
}

export function UpdateReactType(Payload: any) {
  return {
    type: UPDATE_HIREACTION_TYPE,
    payload: Payload,
  };
}


export function UpdateUploadData(Payload: any,Payload2: any) {
  return {
    type: CHANGE_UPLOAD_DATA,
    payload: Payload,
    payload2: Payload2,
  };
}

