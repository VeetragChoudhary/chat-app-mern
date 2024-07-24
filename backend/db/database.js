import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to MondoDB successfully")
    } catch (error) {
        console.log("Error connecting to MondoDB", error)
        process.exit(1)
    }
}

export default dbConnect
