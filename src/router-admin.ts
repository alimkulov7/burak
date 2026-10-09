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
.get(
    "/product/all", 
    restaurantController.verifyRestaurant,
    productController.getAllProducts
);
routerAdmin
.post("/product/create",
    restaurantController.verifyRestaurant,
    productController.createNewProduct)
.post("product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChoosenProduct);
/** User **/
export default routerAdmin;