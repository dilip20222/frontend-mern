import { takeEvery, call, put } from "@redux-saga/core/effects";
import { enpoints } from "../../utils/api";
import api from "../../utils/util";
import { actions } from "./index";

function* login({ payload: { callback, ...body } }) {
  try {
    const res = yield call(api.post, enpoints.login, body);
    if (res.data) {
      let responseData = {
        userId: res.data.user._id,
        name: res.data.user.name,
        userName: res.data.user.userName,
        DOB: res.data.user.DOB,
        email: res.data.user.email,
        token: res.data.loginToken,
      };
      localStorage.setItem("token", responseData.token);
      yield put(
        actions.setUser({ userData: responseData, token: responseData.token })
      );
      yield call(callback);
    }
  } catch (error) {
    yield put(actions.setMessage(error?.response?.data?.message));
  }
}

function* singUp({ payload: { callback, ...body } }) {
  try {
    const res = yield call(api.post, enpoints.signup, body);
    let responseData = {
      userId: res.data.data._id,
      name: res.data.data.name,
      userName: res.data.data.userName,
      DOB: res.data.data.DOB,
      email: res.data.data.email,
      token: res.data.token,
    };
    localStorage.setItem("token", responseData.token);
    yield put(
      actions.setUser({ userData: responseData, token: responseData.token })
    );
    yield call(callback);
  } catch (error) {
    yield put(actions.setMessage(error?.response?.data?.message));
  }
}

export function* authSaga() {
  yield takeEvery(actions.loginSuccess, login);
  yield takeEvery(actions.signUpSucceess, singUp);
}
