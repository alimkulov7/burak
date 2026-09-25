import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req:Request, res:Response) => {
    res.end("Home Page")
});

router.get("/login", (req:Request, res:Response) => {
    res.end("Login Page")
});

router.get("/signup", (req:Request, res:Response) => {
    res.end("SignUp Page")
});

export default router;