import express from 'express'

import {addLocation, getLocations} from '../db/db'
import { NewLocation } from '../../models/locations'

const router = express.Router()

router.get('/locations', async (req, res) => {
  try{
    const locations = await getLocations()
    res.json({ locations })

  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/locations', async (req, res) => {
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

export default router