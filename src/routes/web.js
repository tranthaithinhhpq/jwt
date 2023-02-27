import express from "express"
const router = express.Router()
/**
 * @param {*} app
 */
const intWebroutes = (app)=>{
    router.get("/",(req,res)=>{
        return res.send("hello world")
    })

    return app.use("/",router)
}
export default intWebroutes