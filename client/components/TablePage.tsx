import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

export default function TablePage() {
  const { location } = useParams()
  console.log(location)

  // Change input fields to forms when being edited
  return (
    <div>
      <div className="locHead">{location}</div>
      <div className="card">
        <table>
          <tbody>
            <tr>
              <th>dd/mm/yyyy</th>
              <td>
                <strong>Forecast</strong>
              </td>
              <td>
                <strong>Actual</strong>
              </td>
              <td>
                <strong>
                  <button>Edit</button>
                </strong>
              </td>
            </tr>
            <tr>
              <th>
                <strong>Wave face size</strong>
              </th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Swell Period</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Swell Direction</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Wind Direction</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Wind Speed</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Last tide</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Time Surfed</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Next tide</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th>Overall</th>
              <td>input</td>
              <td>input</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}
