"use server";

import { createClient } from "@/utils/supabase/server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");

  const supabase = createClient();
  //Check if user is already subscribed
  const { data } = await supabase
    .from("newsletters")
    .select()
    .eq("email", email);
  if (data && data[0]) return { done: true, error: "Email already subscriber" };

  const { error } = await supabase.from("newsletters").insert({ email });
  return { done: error ? false : true, error: error ? error.message : null };
}
