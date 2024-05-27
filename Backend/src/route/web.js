import express from "express";
import homeContronller from "../controllers/homeContronller";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeContronller.getHomePage);
    router.get('/about', homeContronller.getAboutPage);
    router.get('/crud', homeContronller.getCRUD);
    router.post('/post-crud', homeContronller.postCRUD);
    router.get('/get-crud', homeContronller.displayGetCRUD);
    router.get('/edit-crud', homeContronller.getEditCRUD);
    router.post('/put-crud', homeContronller.putCRUD);
    router.get('/delete-crud', homeContronller.deleteCRUD);


    router.post('/api/login', userController.handleLogin)
    return app.use("/", router);
}

module.exports = initWebRoutes;