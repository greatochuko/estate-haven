import { UserType } from "@/components/AgentPropertyOffers";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { createClient } from "@/utils/supabase/client";

export async function getAgents(): Promise<UserType[]> {
  return [];
}

export async function getAgent(agentId: string) {
  return null;
}

export async function getUserSession() {
  return null;
}
