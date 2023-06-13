import connection from "./connection";

import { Location, LocationData, NewLocation } from '../../models/locations'

export async function getLocations(db = connection): Promise <Location[]> {
  return await db<Location>('locations').select()
}

export async function addLocation(
  location: NewLocation,
  db = connection
): Promise<NewLocation[]> {
  return await db<NewLocation>('locations').insert(location).returning('*')
}
