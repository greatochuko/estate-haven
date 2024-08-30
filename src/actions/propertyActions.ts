"use server";

import { getUserSession } from "@/services/userServices";
import { getUserIdFromCookies } from "@/utils/getUserId";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {
  let redirectUrl;
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw new Error("User is unauthenticated");

    const imageList = formData.get("images");
    const amenitiesList = formData.get("amenities");

    const newPropertyData = {
      name: formData.get("name"),
      category: formData.get("category"),
      type: formData.get("propertyType"),
      yearBuilt: formData.get("yearBuilt"),
      state: formData.get("state"),
      city: formData.get("city"),
      streetAddress: formData.get("streetAddress"),
      description: formData.get("description"),
      area: formData.get("area"),
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      parkingSpots: formData.get("parkingSpots"),
      amenities: amenitiesList?.toString().split(","),
      price: formData.get("price"),
      frequency: formData.get("frequency"),
      images: imageList?.toString().split(","),
      petsAllowed: !!formData.get("petsAllowed"),
      isPublished: true,
      agent: userId,
    };

    // console.log(newPropertyData);
    const supabase = createClient();
    const { error } = await supabase.from("properties").insert(newPropertyData);
    if (error) {
      throw error;
    }
    redirectUrl = "/settings/my-properties";
  } catch (error) {
    // console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirectUrl && redirect(redirectUrl);
  }
}

export async function saveAsDraft(formData: FormData) {
  let redirectUrl;
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw new Error("User is unauthenticated");

    const imageList = formData.get("images");
    const amenitiesList = formData.get("amenities");

    const newPropertyData = {
      name: formData.get("name"),
      category: formData.get("category"),
      type: formData.get("propertyType"),
      yearBuilt: formData.get("yearBuilt"),
      state: formData.get("state"),
      city: formData.get("city"),
      streetAddress: formData.get("streetAddress"),
      description: formData.get("description"),
      area: formData.get("area"),
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      parkingSpots: formData.get("parkingSpots"),
      amenities: amenitiesList?.toString().split(","),
      price: formData.get("price"),
      frequency: formData.get("frequency"),
      images: imageList?.toString().split(","),
      petsAllowed: !!formData.get("petsAllowed"),
      isPublished: false,
      agent: userId,
    };

    // console.log(newPropertyData);
    const supabase = createClient();
    const { error } = await supabase.from("properties").insert(newPropertyData);
    if (error) {
      throw error;
    }
    redirectUrl = "/settings/my-properties";
  } catch (error) {
    // console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirectUrl && redirect(redirectUrl);
  }
}

export async function editListing(formData: FormData) {
  let redirectUrl;
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw new Error("User is unauthenticated");

    const imageList = formData.get("images");
    const amenitiesList = formData.get("amenities");
    const propertyId = formData.get("propertyId");

    const newPropertyData = {
      name: formData.get("name"),
      category: formData.get("category"),
      type: formData.get("propertyType"),
      yearBuilt: formData.get("yearBuilt"),
      state: formData.get("state"),
      city: formData.get("city"),
      streetAddress: formData.get("streetAddress"),
      description: formData.get("description"),
      area: formData.get("area"),
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      parkingSpots: formData.get("parkingSpots"),
      amenities: amenitiesList?.toString().split(","),
      price: formData.get("price"),
      frequency: formData.get("frequency"),
      images: imageList?.toString().split(","),
      petsAllowed: !!formData.get("petsAllowed"),
      isPublished: true,
      agent: userId,
    };

    // console.log(newPropertyData);
    const supabase = createClient();
    const { error } = await supabase
      .from("properties")
      .update(newPropertyData)
      .eq("id", propertyId);
    if (error) {
      throw error;
    }
    redirectUrl = "/settings/my-properties";
  } catch (error) {
    // console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirectUrl && redirect(redirectUrl);
  }
}

export async function editAsDraft(formData: FormData) {
  let redirectUrl;
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw new Error("User is unauthenticated");

    const imageList = formData.get("images");
    const amenitiesList = formData.get("amenities");
    const propertyId = formData.get("propertyId");

    const newPropertyData = {
      name: formData.get("name"),
      category: formData.get("category"),
      type: formData.get("propertyType"),
      yearBuilt: formData.get("yearBuilt"),
      state: formData.get("state"),
      city: formData.get("city"),
      streetAddress: formData.get("streetAddress"),
      description: formData.get("description"),
      area: formData.get("area"),
      beds: formData.get("beds"),
      bath: formData.get("bath"),
      parkingSpots: formData.get("parkingSpots"),
      amenities: amenitiesList?.toString().split(","),
      price: formData.get("price"),
      frequency: formData.get("frequency"),
      images: imageList?.toString().split(","),
      petsAllowed: !!formData.get("petsAllowed"),
      isPublished: false,
      agent: userId,
    };

    // console.log(newPropertyData);
    const supabase = createClient();
    const { error } = await supabase
      .from("properties")
      .update(newPropertyData)
      .eq("id", propertyId);
    if (error) {
      throw error;
    }
    redirectUrl = "/settings/my-properties";
  } catch (error) {
    // console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirectUrl && redirect(redirectUrl);
  }
}

export async function deleteListing(propertyId: string) {
  const supabase = createClient();
  const { error } = await supabase
    .from("properties")
    .delete()
    .eq("id", propertyId);
  if (error) return;
  revalidatePath("/", "layout");
}

export async function searchProperties(formData: FormData) {}
