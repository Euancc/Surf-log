import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { log } from 'console'

const titles = [
  'Wave face size',
  'Swell Period',
  'Swell Direction',
  'Wind Direction',
  'Wind Speed',
  'Last tide',
  'Time Surfed',
  'Next tide',
  'Overall',
]

export default function TablePage() {
  const { location } = useParams()
  console.log(location)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleEditClick = (index: number) => {
    setSelectedIndex(index)
  }
  console.log(selectedIndex)

  // Change input fields to forms when being edited
  return (
    <div>
      <div className="locHead">{location}</div>
      <div className="card">
        <table>
          <tbody>
            <tr>
              <th>
                dd/mm/yyyy<button>Edit</button>
              </th>
              <td>
                <strong>Forecast</strong>
              </td>
              <td>
                <strong>Actual</strong>
              </td>
            </tr>
            {titles.map((title, index) => {
              return (
                <TableRow
                  onEditClick={handleEditClick}
                  key={index}
                  title={title}
                  isEditing={index === selectedIndex}
                  index={index}
                />
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

interface TableRowProps {
  title: string
  index: number
  isEditing: boolean
  onEditClick: (index: number) => void
}

function TableRow({ title, index, onEditClick, isEditing }: TableRowProps) {
  const [forecastText, setForecastText] = useState('')
  const [actualText, setactualText] = useState('')

  const handleEditClick = () => {
    onEditClick(index)
  }

  return isEditing ? (
    <tr>
      <th>
        <b>{title}</b>
      </th>
      <td>
        <input
          type="text"
          value={forecastText}
          onChange={(event) => setForecastText(event.target.value)}
        />
      </td>
      <td>input</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
      </td>
    </tr>
  ) : (
    <tr>
      <th>
        <b>{title}</b>
      </th>
      <td>{forecastText}</td>
      <td>input</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
      </td>
    </tr>
  )
}
