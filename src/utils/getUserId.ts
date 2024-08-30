import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function getUserIdFromCookies() {
  try {
    const cookie = cookies().get("token");

    const token = cookie?.value;
    const jwtSecret = process.env.JWT_SECRET;
    if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

    const payload = jwt.verify(token, jwtSecret);
    if (typeof payload === "string") throw new Error("Invalid payload");
    const userId = payload.userId;
    return { userId, error: null };
  } catch (error) {
    return { userId: null, error: error };
  }
}
