import axios from "axios";
import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILURE,
    FETCH_VEHICLES_SUCCESS,
    RESET_VEHICLES_STATE,
    SET_VEHICLES_FILTER,
    SET_VEHICLES_PAGE
} from "../constants";
import {IVehicleFilterType, IVehicle, VehiclesActionType} from "../types/vehicles";
import {Dispatch} from "redux";

const vehiclesRequested = () => {
    return {
        type: FETCH_VEHICLES,
    };
};

const vehiclesLoaded = (newVehicles: IVehicle[]) => {
    return {
        type: FETCH_VEHICLES_SUCCESS,
        payload: newVehicles
    };
};

const vehiclesError = (error: string) => {
    return {
        type: FETCH_VEHICLES_FAILURE,
        payload: error
    };
};

const fetchVehicles = (type: string = '', page: number = 1, limit: number = 21) => async (dispatch: Dispatch<VehiclesActionType>) => {
    try {
        dispatch(vehiclesRequested());
        const { data } = await axios.get<IVehicle[]>('/api/vehicles/', {params: {type, page, limit}})
        dispatch(vehiclesLoaded(data))
    } catch (err) {
        dispatch(vehiclesError(err.response.statusText));
    }
}

const setVehiclesPage = (page: number) => {
    return {
        type: SET_VEHICLES_PAGE,
        payload: page
    }
}

const setVehiclesFilter = (type: IVehicleFilterType) => {
    return {
        type: SET_VEHICLES_FILTER,
        payload: type
    }
}

const resetVehiclesState = () => {
    return {
        type: RESET_VEHICLES_STATE,
    }
}

export {
    fetchVehicles,
    setVehiclesPage,
    setVehiclesFilter,
    vehiclesRequested,
    resetVehiclesState
};