import React, { ChangeEvent, useState } from "react";
import { LocationData } from "../../models/locations";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addLocation } from "../apis/apiClient";





const initialFormData = {
  location: ' ',
}

interface formData {
  location: string
}

export default function AddLocationForm() {

const [form, setForm] = useState<formData>(initialFormData)

const queryClient = useQueryClient()

const [type, setType] = useState(' ')


 const addLocationMutation = useMutation(addLocation, {
  onSuccess: async () => {
    queryClient.invalidateQueries(['locations'])
  }
 })



function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  console.log('form', form) // error not found in App.tsx
  addLocationMutation.mutate(form)
  setForm(initialFormData)

}

function handleChange(event: ChangeEvent<HTMLInputElement>) {
  const { name, value } = event.target
  const newForm = {...form, [name]: value}
  setForm(newForm)
}

return (
  <>
  <form onSubmit={handleSubmit}>
    <label htmlFor="location">New Location:</label>
    <input
    id="type"
    type="text"
    name="location"
    value={form.location}
    onChange={handleChange}
    />
    <button>Submit</button>
    </form>
  </>
)

}