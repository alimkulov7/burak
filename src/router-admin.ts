import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller"
import productController from "./controllers/product.controller";

/** Restaurant **/
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);

routerAdmin
.get("/logout", restaurantController.logout)
.post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me",restaurantController.checkAuthSession);
/** Product **/
routerAdmin
.get("/product/all", productController.getAllProducts)
.post("/product/create", productController.createNewProduct)
.post("product/:id", productController.updateChoosenProduct);
/** User **/
export default routerAdmin;