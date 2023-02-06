export interface day  {
    hours: hour[];
}

export interface hour {
    temp: number;
    wind_spd: number;
    // wind_dir: string;
    // description: string;
    // uv_index: number;
    // sunrise: string;
    // sunset: string;
}