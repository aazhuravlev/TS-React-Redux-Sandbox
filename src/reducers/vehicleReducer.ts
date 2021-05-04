import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILURE,
    FETCH_VEHICLES_SUCCESS,
    RESET_VEHICLES_STATE,
    SET_VEHICLES_FILTER,
    SET_VEHICLES_PAGE
} from "../constants";
import {IVehiclesState, VehiclesActionType} from "../types/vehicles";

const initialState: IVehiclesState = {
    vehicles: [],
    loading: false,
    error: null,
    page: 1,
    type: {
        label: 'whatever',
        value: ''
    },
}

const vehiclesReducer = (state = initialState, action: VehiclesActionType): IVehiclesState => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: action.payload,
                loading: false,
                error: null,
            };

        case FETCH_VEHICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case SET_VEHICLES_PAGE:
            return {
                ...state,
                page: action.payload
            };

        case SET_VEHICLES_FILTER:
            return {
                ...state,
                type: action.payload
            };

        case RESET_VEHICLES_STATE:
            return {
                ...initialState
            };

        default:
            return state;
    }
}

export default vehiclesReducer;