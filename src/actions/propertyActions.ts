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
      streetAddress: formData.get("streetAddress"),
      yearBuilt: formData.get("yearBuilt"),
      parkingSpots: formData.get("parkingSpots"),
      description: formData.get("description"),
      images: (formData.get("images") as string).split(","),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      type: formData.get("propertyType"),
      agent: user._id,
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      area: formData.get("area"),
      amenities: (formData.get("amenities") as string).split(","),
      category: formData.get("category"),
      petsAllowed: formData.get("petsAllowed"),
    };
    await Property.create(newPropertyData);
    redirectUrl = "/settings/my-properties";
  } catch (error) {
  } finally {
    revalidatePath("/", "layout");
    if (redirectUrl) redirect(redirectUrl);
  }
}

export async function saveAsDraft(formData: FormData) {
  let redirectUrl;
  try {
    const user = await getUserSession();
    if (!user) throw new Error("user not authenticated");

    const newPropertyData = {
      name: formData.get("name"),
      streetAddress: formData.get("streetAddress"),
      yearBuilt: formData.get("yearBuilt"),
      parkingSpots: formData.get("parkingSpots"),
      description: formData.get("description"),
      images: (formData.get("images") as string).split(","),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      type: formData.get("propertyType"),
      agent: user._id,
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      area: formData.get("area"),
      amenities: (formData.get("amenities") as string).split(","),
      category: formData.get("category"),
      petsAllowed: formData.get("petsAllowed"),
      isPublished: false,
    };
    await Property.create(newPropertyData);
    redirectUrl = "/settings/my-properties";
  } catch (error) {
  } finally {
    revalidatePath("/", "layout");
    if (redirectUrl) redirect(redirectUrl);
  }
}

export async function editListing(formData: FormData) {
  let redirectUrl;
  try {
    const user = await getUserSession();
    if (!user) throw new Error("user not authenticated");

    const propertyToEdit = {
      name: formData.get("name"),
      streetAddress: formData.get("streetAddress"),
      yearBuilt: formData.get("yearBuilt"),
      parkingSpots: formData.get("parkingSpots"),
      description: formData.get("description"),
      images: (formData.get("images") as string).split(","),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      type: formData.get("propertyType"),
      agent: user._id,
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      area: formData.get("area"),
      amenities: (formData.get("amenities") as string).split(","),
      category: formData.get("category"),
      petsAllowed: formData.get("petsAllowed"),
      isPublished: true,
    };
    const propertyId = formData.get("propertyId");
    await Property.findByIdAndUpdate(propertyId as string, propertyToEdit);
    redirectUrl = "/settings/my-properties";
  } catch (error) {
  } finally {
    revalidatePath("/", "layout");
    if (redirectUrl) redirect(redirectUrl);
  }
}

export async function editAsDraft(formData: FormData) {
  let redirectUrl;
  try {
    const user = await getUserSession();
    if (!user) throw new Error("user not authenticated");

    const propertyToEdit = {
      name: formData.get("name"),
      streetAddress: formData.get("streetAddress"),
      yearBuilt: formData.get("yearBuilt"),
      parkingSpots: formData.get("parkingSpots"),
      description: formData.get("description"),
      images: (formData.get("images") as string).split(","),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      type: formData.get("propertyType"),
      agent: user._id,
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      area: formData.get("area"),
      amenities: (formData.get("amenities") as string).split(","),
      category: formData.get("category"),
      petsAllowed: formData.get("petsAllowed"),
      isPublished: false,
    };
    const propertyId = formData.get("propertyId");
    await Property.findByIdAndUpdate(propertyId as string, propertyToEdit);
    redirectUrl = "/settings/my-properties";
  } catch (error) {
  } finally {
    revalidatePath("/", "layout");
    if (redirectUrl) redirect(redirectUrl);
  }
}

export async function deleteListing(propertyId: string) {
  try {
    await Property.findByIdAndDelete(propertyId);
  } catch (error) {}
  revalidatePath("/", "layout");
}
