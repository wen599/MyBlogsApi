import type { Request,Response } from "express"
const apiHandler={
    checking:(req:Request,res:Response)=>{
        res.send({
            status:0,
            message:'验证成功'
        })
    }
}

export default apiHandler