import express from "express"
import homeController from '../controller/homeController'
const router = express.Router()
/**
 * @param {*} app
 */
const intWebroutes = (app)=>{
    router.get("/",homeController.handleHomePage)
    router.get("/user",homeController.handleUserPage)

    return app.use("/",router)
}
export default intWebroutes