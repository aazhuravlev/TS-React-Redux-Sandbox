import {combineReducers} from "redux";
import themeReduser from './themeReduser';

const rootReducer = combineReducers({
  theme: themeReduser,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;