import db from "@/db/db"
import type { Request,Response } from "express"
const apiHandler={
    // token验证
    checking:(req:Request,res:Response)=>{
        res.send({
            status:0,
            message:'验证成功'
        })
    },
    // 新增文章
    createArticle:(req:Request,res:Response)=>{
        const {time,name,content}=req.body
        const sql='insert into article (time,name,content) values (?,?,?)'
        db.query(sql,[time,name,content],(err,result)=>{
            if(err) return res.send({
                status:1,
                message:err.message
            })
            if(result.affectedRows === 1){
                res.send({
                    status:0,
                    message:'上传成功'
                })
            }
        })
        
    },

    // 删除文章
    deleteArticle:(req:Request,res:Response)=>{
        const sql='delete from `article` where id = ? '
        db.query(sql,req.body.id,(err,result)=>{
            if(err) return res.send({
                status:1,
                message:err.message
            })
            if(result.affectedRows===1){
                return res.send({
                    status:0,
                    message:'删除成功'
                })
            }
        })
    },

    // 修改文章
    updateArticle:(req:Request,res:Response)=>{
        const {id,name,content}=req.body
        const sql='update `article` set name=?,content=? where id = ? '
        db.query(sql,[name,content,id],(err,result)=>{
            if(err) return res.send({
                status:1,
                message:err.message
            })
            if(result.affectedRows===1){
                res.send({
                    status:0,
                    message:'修改成功',
                })
            } 
        })
    },
    // 根据name查询文章
    findKeyword:(req:Request,res:Response)=>{
        let {keyword}=req.query
        keyword=`%${keyword}%`        
        const sql='select id,name,time from `article` where name like binary ?  order by time desc'
        db.query(sql,[keyword,keyword],(err,result)=>{                        
            if(err) return res.send({
                status:1,
                message:err.message
            })
            res.send({
                status:0,
                message:'查询成功',
                result
            })
        })
    }


}

export default apiHandler