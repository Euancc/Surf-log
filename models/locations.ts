export interface LocationData {
  type: string
  location: string
}

export interface Location {
  id: number
  location: string
  name: string
}

export interface NewLocation {
  location: string
}

export interface DelLocation {
  id: Location['id']
}

export interface RenameLocation {
  id: Location['id']
  newName: Location['location']
}
// comment for adding
