import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://10govindgupta10:govind123@cluster0.bh7bpp3.mongodb.net/?retryWrites=true&w=majority"
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
