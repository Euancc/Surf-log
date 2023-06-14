import React, { useState } from 'react'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteLocation, renameLocation } from '../apis/apiClient'
import { query } from 'express'


interface Props {
  id: number
  name: string
}

export default function LocationsListItem({id, name}: Props) {
  const [editing, setEditing] = useState(false)

  const [text, setText] = useState(name)

  const queryClient = useQueryClient()

  const delLocationMutation = useMutation(deleteLocation, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['location'])
    }
  })


const editLocationMutation = useMutation(renameLocation, {
  onSuccess: async () => {
    queryClient.invalidateQueries(['location'])
  }
})


const handleDelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  delLocationMutation.mutate({id})
}


const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  editLocationMutation.mutate({id, newName: text})
  setEditing(false)
}
const handleStopEditingClick = () => {
  setEditing(false)
  setText(name)
}

const handleStartEditingClick = () => {
  setEditing(false)
}

return (
  <div>
    {editing ? (
      <form onSubmit={handleEditSubmit} >
        <input
           type='text'
           value={text}
           onChange={(e) => setText(e.target.value)}
           />
        <button type='submit'>Save</button> 
        <button type='button' onClick={handleStopEditingClick}></button>
      </form>
) : (
  <p>
    {id} - {name} -{' '}
    <span>
      <button onClick={handleStartEditingClick}>Rename</button>
      <button onClick={handleDelClick}>Delet</button>
    </span>
  </p>
)}

</div>
)

}