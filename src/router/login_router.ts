import express from 'express'
import login_handler from '@/router_handler/login_handler';

const loginRouter = express.Router()
loginRouter.post('/login',login_handler)
export default loginRouter