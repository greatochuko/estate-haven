import { UserType } from "@/components/AgentPropertyOffers";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { createClient } from "@/utils/supabase/server";

export async function getAgents(): Promise<UserType[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, firstname, lastname, email, bio, imageUrl, companyName, phoneNumber, workEmail, facebook, linkedIn, instagram"
    );
  if (data && !error) {
    return data as UserType[];
  } else {
    return [];
  }
}

export async function getAgent(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, firstname, lastname, email, bio, imageUrl, companyName, phoneNumber, workEmail, facebook, linkedIn, instagram"
    )
    .eq("id", userId);
  if (data && !error) {
    return data[0] as UserType;
  } else {
    return null;
  }
}

export async function getUserSession() {
  try {
    const session = cookies().get("token");
    if (!session) return null;
    const payload = jwt.verify(session.value, process.env.JWT_SECRET!);
    if (typeof payload === "string") return null;
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "id, firstname, lastname, email, bio, imageUrl, companyName, phoneNumber, workEmail, facebook, linkedIn, instagram"
      )
      .eq("id", payload.userId);

    if (!data?.at(0)) {
      return null;
    }
    const user = data[0];
    return user as UserType;
  } catch (error) {
    return null;
  }
}
