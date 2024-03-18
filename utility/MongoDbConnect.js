const mongoose = require("mongoose");

const DBConnection = async () => {
    const URL = process.env.MONGODB_URL;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = DBConnection;
