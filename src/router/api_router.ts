import apiHandler from '@/router_handler/api_handler'
import express from 'express'
const apiRouter=express.Router()

apiRouter.post('/checking',apiHandler.checking)

export default apiRouter