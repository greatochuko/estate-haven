import { UserType } from "@/components/AgentPropertyOffers";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/actions/userActions";

export async function getAgents(): Promise<UserType[]> {
  return [];
}

export async function getAgent(agentId: string) {
  return null;
}

export async function getUserSession() {
  try {
    const session = cookies().get("token");
    if (!session) return;
    const payload = jwt.verify(session.value, process.env.JWT_SECRET!);
    if (typeof payload === "string") return null;
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", payload.userId);

    if (!data?.at(0)) {
      return null;
    }
    const user = data[0];
    return user;
  } catch (error) {
    return null;
  }
}
