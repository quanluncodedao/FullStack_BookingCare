import express from "express";
import homeContronller from "../controllers/homeContronller";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
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

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode)
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome)
    router.get('/api/get-all-doctors', doctorController.getAllDoctors)
    router.post('/api/save-infor-doctors', doctorController.postInforDoctor)
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetaildDoctorById)

    return app.use("/", router);
}

module.exports = initWebRoutes;