import {combineReducers} from "redux";
import themeReduсer from './themeReduсer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
  theme: themeReduсer,
  vehicles: vehicleReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;