"use server";

import { Property } from "@/db/models/Property";
import { getUserSession } from "@/services/userServices";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {
  let redirectUrl;
  try {
    const user = await getUserSession();
    if (!user) throw new Error("user not authenticated");

    const newPropertyData = {
      name: formData.get("name"),
      yearBuilt: formData.get("yearBuilt"),
      parkingSpots: formData.get("parkingSpots"),
      description: formData.get("description"),
      images: formData.get("images"),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      type: formData.get("propertyType"),
      agentId: formData.get("agentId"),
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      area: formData.get("area"),
      category: formData.get("category"),
      petsAllowed: formData.get("petsAllowed"),
    };
    await Property.create(newPropertyData);
    redirectUrl = "/settings/my-properties";
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/", "layout");
    if (redirectUrl) redirect(redirectUrl);
  }
}
