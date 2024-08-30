"use server";

import { getUserSession } from "@/services/userServices";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {}

export async function saveAsDraft(formData: FormData) {}

export async function editListing(formData: FormData) {}

export async function editAsDraft(formData: FormData) {}

export async function deleteListing(propertyId: string) {}

export async function searchProperties(formData: FormData) {}
