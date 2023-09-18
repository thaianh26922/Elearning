import { put, select, takeEvery } from "redux-saga/effects";
import { type } from "os";
import { setToken } from "./tokenSlice";


// function* handleChangePath(action: any) {
//     const state: StatePath["value"] = yield select((state) => state.path);
//     const newState = {
//         path: '/',
//         element: '<Log></Home>'
//     }


//     // state.push
//     yield put(changePath(newState));

// }
function* handleSetToken(action: any) {
    console.log("set token"); 
}
export default function* StateSaga() {
    console.log("StateSaga");
    yield takeEvery(setToken, handleSetToken);

}