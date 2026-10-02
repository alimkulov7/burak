import dns from "dns";     ///  YANGI LINE
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

dns.setServers(["1.1.1.1", "8.8.8.8"]);   //=>  YANGI LINE noutbuk dnsi bilan muoomo bolganiligi uchun mongodb error kelib chiqdi

mongoose.connect(process.env.MONGO_URL as string, {}).then(data => {
    console.log("Mongodb connection succeed");

    const PORT = process.env.PORT ?? 3003;

    app.listen(PORT, function () {
        console.info(`Server running successfully on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch(err => {
    console.log("ERROR on connection mongodb", err);
});