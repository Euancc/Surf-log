import express from 'express'
import * as db from '../db/db'
import {addLocation, getLocations} from '../db/db'
import { NewLocation } from '../../models/locations'

const router = express.Router()


// GET /api/vi/locations
router.get('/', async (req, res) => {
  try{
    const locations = await getLocations()
    res.json({ locations })

  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// POST /api/vi/locations
router.post('/', async (req, res) => {
  try{
    const newLocation = req.body.newLocation as NewLocation
    if(!newLocation) {
      res.sendStatus(400)
      return
    }
    const location = await addLocation(newLocation)
    res.json({location})
  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.patch('/', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  const name = req.body.name
  await db.renameLocation(id, name)
  res.sendStatus(200)
})

export default router