import {combineReducers} from "redux";
import themeReducer from './themeReduсer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  vehicles: vehicleReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;