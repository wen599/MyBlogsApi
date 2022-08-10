import apiHandler from '@/router_handler/api_handler'
import express from 'express'
const apiRouter=express.Router()

apiRouter.post('/checking',apiHandler.checking)
apiRouter.post('/create',apiHandler.createArticle)
apiRouter.post('/deleteArticle',apiHandler.deleteArticle)
apiRouter.post('/update',apiHandler.updateArticle)
apiRouter.get('/findKeyword',apiHandler.findKeyword)

export default apiRouter