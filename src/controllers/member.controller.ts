import { Request, Response } from "express";
import {T} from "../libs/types/common";

const memberController: T = {}
memberController.goHome = (req:Request, res:Response) => {
    try {
        res.end("Home Page");
    } catch (err) {
        console.log("Error, goHome: ", err);
    }
}

memberController.getLogin = (req:Request, res:Response) => {
    try {
        res.end("Login Page");
    } catch (err) {
        console.log("Error, getLogin: ", err);
    }
}

memberController.getSignup = (req:Request, res:Response) => {
    try {
        res.end("Signup Page");
    } catch (err) {
        console.log("Error, getSignup: ", err);
    }
}