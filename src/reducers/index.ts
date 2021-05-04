import {combineReducers} from "redux";
import themeReduser from './themeReduser';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
  theme: themeReduser,
  vehicles: vehicleReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;