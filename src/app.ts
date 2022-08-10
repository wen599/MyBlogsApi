import express from "express";
import 'module-alias/register'
import loginRouter from "./router/login_router";
import cors from 'cors'
import config from "./config";
import apiRouter from "./router/api_router";
import {expressjwt} from "express-jwt";
import publicRouter from "./router/publicRouter";
import type {Request,Response,ErrorRequestHandler,NextFunction} from 'express';


const app=express()
// 跨域中间件
app.use(cors())
//  解析json格式数据中间件
app.use(express.json())
// 解析urlencoded中间件
app.use(express.urlencoded())


// expressJWT中间件
app.use(expressjwt({secret:config.secretKey,algorithms:["HS256"]}).unless({path:[/^\/user\//,/^\/public\//]}))

// 登录相关路由
app.use('/user',loginRouter)

// 后台相关路由
app.use('/api',apiRouter)

// 获取文章信息公开路由
app.use('/public',publicRouter)

// 错误中间件
app.use((err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{
    if(err.name==='UnauthorizedError'){
        return res.send({status:401,message:'无效的token'})
    }
    res.send({states:500,message:'未知错误'})
})

app.listen(config.port,()=>{
    console.log('http://127.0.0.1:'+config.port)
})