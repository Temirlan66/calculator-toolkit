import { combineReducers, createStore } from "redux";
import { authRudecer } from "./auth/Auth";
import { colculatorRreducer } from "./calculator/CalculatorReducer";

const rootReducer = combineReducers({
  calculator: colculatorRreducer,
  auth:authRudecer
});
export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("STORE CHNAGED", store.getState());
});
