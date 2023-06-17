import React, { useState } from 'react'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteLocation, renameLocation } from '../apis/apiClient'
import { query } from 'express'
import { Link } from 'react-router-dom'


interface Props {
  id: number
  locationName: string
}

export default function LocationsListItem({id, locationName: location}: Props) {
  const [editing, setEditing] = useState(false)

 

  const [text, setText] = useState(location)

  const queryClient = useQueryClient()

  const delLocationMutation = useMutation(deleteLocation, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['locations'])
    }
  })


const editLocationMutation = useMutation(renameLocation, {
  onSuccess: async () => {
    queryClient.invalidateQueries(['locations'])
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
  setText(location)
}

const handleStartEditingClick = () => {
  setEditing(true)
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
        <button type='button' onClick={handleStopEditingClick}>Stop editing</button>
        
      </form>
) : (
  <p className='locationName'>
     {location}  ~ {' '}
    <span>
      <button onClick={handleStartEditingClick}>Rename</button>
      <button onClick={handleDelClick}>Delete</button>
    </span>
  </p>
)}

</div>
)

}

//  ~ <Link to={`/TablePage/${location}`}> {location} </Link> ~ {' '}