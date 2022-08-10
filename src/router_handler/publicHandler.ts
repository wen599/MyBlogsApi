import type { Request,Response } from "express"
import db from "@/db/db"
const publicHandler={
        //  获取文章内容
        getContent:(req:Request,res:Response)=>{
            const sql='select name,content from `article` where id = ? '
            db.query(sql,req.query.id,(err,result)=>{
                
                if(err) return res.send({
                    status:1,
                    message:err.message
                })
                 res.send({
                    status:0,
                    message:'获取成功',
                    data:result
                })
                
            })
        },
            // 查询所有文章
    findAllArticle:(req:Request,res:Response)=>{
        let sql='SELECT id,name,time FROM `article` ORDER BY time DESC'
        if(req.query.limit){
            sql = sql+' limit '+req.query.limit
        }
                        
        db.query(sql,(err,result)=>{
            if(err) return res.send({
                status:1,
                message:err.message
            })
            res.send({
                status:0,
                message:'查询成功',
                date:result                
            })
        })
    }
}
export default publicHandler