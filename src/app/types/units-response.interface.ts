import { Location } from 'src/app/types/location.interface';

export interface UnitsResponse {
  current_country_id: number,
  locations: Location[],
}