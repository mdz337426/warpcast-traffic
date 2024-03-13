import app from './app'
import data from './data'
import click from './click'
import accessKey from './access-key'
import frame from './frame'
import express from 'express'

const router = express.Router()

router.use('/app', app)
router.use('/data', data)
router.use('/click', click)
router.use('/access-key', accessKey)
router.use('/frame', frame)

export default router
