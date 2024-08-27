import { AgentType } from "@/components/AgentPropertyOffers";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "@/db/models/User";

export async function getAgents() {
  return await User.find();
}

export async function getAgent(agentId: string) {
  return await User.findById(agentId);
}

export async function getUserSession(): Promise<AgentType | null> {
  try {
    const cookie = cookies().get("token");

    const token = cookie?.value;
    const jwtSecret = process.env.JWT_SECRET;
    if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

    const payload = jwt.verify(token, jwtSecret);
    if (typeof payload === "string") throw new Error("Invalid payload");

    const user = await User.findById(payload.userId);
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return null;
  }
}
