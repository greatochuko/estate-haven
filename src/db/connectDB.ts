import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectDB() {
  if (cachedConnection) {
    console.log("Using cached mongoDB connection");
    return cachedConnection;
  }

  try {
    const cnx = await mongoose.connect(
      "mongodb://localhost:27017/estateHavenDB"
    );
    cachedConnection = cnx.connection;
    console.log("Successfully connected to mongoDB");
    return cachedConnection;
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }
}

