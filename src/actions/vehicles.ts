import axios from "axios";
import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILURE,
    FETCH_VEHICLES_SUCCESS,
    SET_VEHICLES_FILTER,
    SET_VEHICLES_PAGE
} from "../constants";
import {IVehicleFilterType, IVehicles, VehiclesActionType} from "../types/vehicles";
import {Dispatch} from "redux";

const vehiclesRequested = () => {
    return {
        type: FETCH_VEHICLES,
    };
};

const vehiclesLoaded = (newVehicles: IVehicles[]) => {
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

const fetchVehicles = (type: string = '', page: number = 1, limit: number = 21) => (dispatch: Dispatch<VehiclesActionType>) => {
    dispatch(vehiclesRequested());
    axios.get<IVehicles[]>('/api/vehicles/', {params: {type, page, limit}})
        .then(({data}) => dispatch(vehiclesLoaded(data)))
        .catch((err) => dispatch(vehiclesError(err.response.statusText)));
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

export {
    fetchVehicles,
    setVehiclesPage,
    setVehiclesFilter,
    vehiclesRequested
};