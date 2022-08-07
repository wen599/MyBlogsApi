import express from "express";
import 'module-alias/register'

const app=express()
app.get('/',(req,res)=>{
    console.log(111);
    res.send('服务器响应回来的数据')
})
app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000')
})