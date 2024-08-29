import { AgentType } from "@/components/AgentPropertyOffers";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { User } from "@/db/models/User";
import { connectDB } from "@/db/connectDB";

export async function getAgents(): Promise<AgentType[]> {
  await connectDB();

  return JSON.parse(JSON.stringify(await User.find()));
}

export async function getAgent(agentId: string): Promise<AgentType | null> {
  await connectDB();

  return JSON.parse(JSON.stringify(await User.findById(agentId)));
}

export async function getUserSession(): Promise<AgentType | null> {
  try {
    await connectDB();

    const cookie = cookies().get("token");

    const token = cookie?.value;
    const jwtSecret = process.env.JWT_SECRET;
    if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

    const payload = jwt.verify(token, jwtSecret);
    if (typeof payload === "string") throw new Error("Invalid payload");

    const user = JSON.parse(
      JSON.stringify(await User.findById(payload.userId))
    );
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return null;
  }
}
