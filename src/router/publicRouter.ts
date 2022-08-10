import express from 'express'
import publicHandler from '@/router_handler/publicHandler'

const publicRouter=express.Router()

publicRouter.get('/getContent',publicHandler.getContent)
publicRouter.get('/findAllArticle',publicHandler.findAllArticle)

export default publicRouter