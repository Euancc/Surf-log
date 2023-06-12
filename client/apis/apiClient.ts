import request from "superagent"

import { Location, NewLocation } from "../../models/locations"

const locationUrl = '/api/vi/locations'

export async function getLocations(): Promise<Location[]> {
  const response = await request.get(locationUrl)
  return response.body.locations
}

export async function addLocation(newLocation: NewLocation): Promise<Location> {
  const response = await request.post(locationUrl).send({newLocation: newLocation})
  return response.body.location
}