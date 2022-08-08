import bcrypt from 'bcryptjs'
import type { Request,Response } from "express"
import db from '@/db/db'
import jwt from 'jsonwebtoken'
import config from '@/config'

const login_handler=(req:Request,res:Response)=>{

    const { userName,password } = req.body
    const sql='select id,userName,password from user where userName=?'
    db.query(sql,userName,(err,result)=>{
        const  fail=(message:string)=>{
            res.send({
                states:1,
                message
            })
        }
        if(err) return fail(err.message)
        if(result.length!==1) return  fail('用户名不存在')
        if(bcrypt.compareSync(password,result[0].password)){
            res.send({
                states:0,
                message:'登录成功',
                token:'Bearer '+jwt.sign({...result[0],password:''},config.secretKey,{expiresIn:'1h'})
            })
        }else{            
            fail('密码错误')
        }
    })
   
}
export default login_handler