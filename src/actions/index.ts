import * as themeActions from "./theme";
import * as vehiclesActions from "./vehicles";

const actions = {
    ...themeActions,
    ...vehiclesActions
}

export default actions;