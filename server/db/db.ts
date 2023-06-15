import  db from "./connection";

import { Location, LocationData, NewLocation } from '../../models/locations'

export async function getLocations(): Promise <Location[]> {
  return await db<Location>('locations').select()
}

export async function addLocation(
  location: NewLocation,
 
): Promise<NewLocation[]> {
  return await db<NewLocation>('locations').insert(location).returning('*')
}

export async function renameLocation(
  id: number, name: string
): Promise<Location | undefined> {
  return db('locations').where({id}).update({ name }).returning(['id', 'name'])
}

export async function deleteLocation (
  id: number
): Promise<void> {
  await db('locations').where({ id }).delete()
}
