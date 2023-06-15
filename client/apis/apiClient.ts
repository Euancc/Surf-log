import request from "superagent"

import { Location, NewLocation, DelLocation, RenameLocation } from "../../models/locations"

// const locationUrl = '/api/vi/locations'

export async function getLocations(): Promise<Location[]> {
  const response = await request.get('/api/vi/locations')
  return response.body.locations
}

export async function addLocation(location: NewLocation): Promise<Location> {
  const response = await request.post('/api/vi/locations').send({newLocation: location})
  return response.body.location
}


export async function deleteLocation({ id }: DelLocation): Promise<void> {
  await request.delete(`/api/vi/locations/${id}`)
}

export async function  renameLocation ({id, newName}: RenameLocation): Promise<void> {
  await request.patch(`/api/vi/locations/${id}`).send({location: newName})
}