import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILURE,
    FETCH_VEHICLES_SUCCESS,
    SET_VEHICLES_FILTER,
    SET_VEHICLES_PAGE
} from "../constants";

export interface IVehicle {
    _id: string,
    id?: string,
    name: string,
    type: string,
    description: string,
    specifications_text: string,
    team_text: string,
    term_text: string,
    rent: string | number,
    preview: string,
    image: string
}

export interface IVehicleFilterType {
    label: string,
    value: string
}

export interface IVehiclesState {
    vehicles: IVehicle[];
    loading: boolean;
    error: null | string;
    page: number;
    type: IVehicleFilterType;
}

interface IFetchVehicles {
    type: typeof FETCH_VEHICLES;
    payload?: any
}

interface IFetchVehiclesSuccess {
    type: typeof FETCH_VEHICLES_SUCCESS,
    payload: IVehicle[],
}

interface IFetchVehiclesError {
    type: typeof FETCH_VEHICLES_FAILURE,
    payload: string,
}

interface ISetVehiclesPage {
    type: typeof SET_VEHICLES_PAGE,
    payload: number,
}

interface ISetVehiclesFilter {
    type: typeof SET_VEHICLES_FILTER,
    payload: IVehicleFilterType,
}

export type VehiclesActionType = IFetchVehicles | IFetchVehiclesSuccess | IFetchVehiclesError | ISetVehiclesPage | ISetVehiclesFilter;