import db from './connection'

import { Location, NewLocation } from '../../models/locations'

export async function getLocations(): Promise<Location[]> {
  return await db<Location>('locations').select()
}

export async function addLocation(
  location: NewLocation
): Promise<NewLocation[]> {
  return await db<NewLocation>('locations').insert(location).returning('*')
}

export async function renameLocation(
  id: number,
  location: string
): Promise<Location | undefined> {
  return db('locations')
    .where({ id })
    .update({ location })
    .returning(['id', 'location'])
}

export async function deleteLocation(id: number): Promise<void> {
  await db('locations').where({ id }).delete()
}

export function TablePage() {
  throw new Error('Function not implemented.')
}

// Make functions for surf data
