import React, { useState } from "react";
import { LocationData } from "../../models/locations";



interface Props {
  onAddLocation: (newLocation: LocationData) => void
}

export default function AddLocationForm(props:Props) {
const {onAddLocation} = props

  const [type, setType] = useState(' ')


// function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
//   setText(event.target.value)
// }

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const location = {type}
 onAddLocation(location)
}

return (
  <>
  <form onSubmit={handleSubmit}>
    <label htmlFor="new-location">New Location:</label>
    <input
    id="type"
    type="text"
    name="new-Location"
    value={type}
    onChange={(e) => setType(e.target.value)}
    />
    <button>Submit</button>
    </form>
  </>
)

}