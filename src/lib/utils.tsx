const {default: mongoose} = require("mongoose");
const ConnectToDB = async () => {
    try { 
        const db = await mongoose.connect(process.env.MONGODB_URL);
        return db 
      } catch (error) {
        console.log("error:", error)
        throw new Error ("DB Connection is failed");
    }
}
export default ConnectToDB