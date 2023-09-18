import { all } from "redux-saga/effects";
import StateSaga from "../features/counter/StateSaga";

// import { data } from "App";
// const count1 = useAppSelector(selectUser);
function* helloSaga(){
  console.log("hello Saga");

}

export default function* rootSaga() {
  console.log("root Saga");
  yield all([helloSaga(), StateSaga()])
  
}
