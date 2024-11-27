import { PropertySearchParams } from "@/app/properties/page";
import { PropertyType } from "@/components/Property";
import { createClient } from "@/utils/supabase/client";

export async function getProperties(): Promise<PropertyType[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*, agent(*)")
    .eq("isPublished", true)
    .order("dateCreated");
  if (error) console.log(error);
  return data || [];
}

export async function searchProperties(
  searchParams: PropertySearchParams
): Promise<PropertyType[]> {
  const {
    q: query = "",
    category,
    city,
    maxBathroom,
    maxBedroom,
    maxPrice,
    minBathroom,
    minBedroom,
    minPrice,
    page,
    propertyTypes,
    state,
  } = searchParams;

  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select()
    .eq("isPublished", true);

  if (error) return [];

  let properties = (data as PropertyType[]).filter(
    (property) =>
      property.name.includes(query) ||
      property.state.includes(query) ||
      property.city.includes(query) ||
      property.streetAddress.includes(query)
  );

  if (state)
    properties = properties.filter(
      (property) => property.state.toLowerCase() === state.toLowerCase()
    );
  if (city)
    properties = properties.filter(
      (property) => property.city.toLowerCase() === city.toLowerCase()
    );
  if (propertyTypes)
    properties = properties.filter((property) =>
      propertyTypes
        .split("-")
        .some((p) => property.type.toLowerCase() === p.toLowerCase())
    );
  if (category === "rent")
    properties = properties.filter((property) => property.category === "rent");
  if (category === "sale")
    properties = properties.filter((property) => property.category === "sale");
  if (minPrice)
    properties = properties.filter(
      (property) => property.price >= Number(minPrice)
    );
  if (maxPrice)
    properties = properties.filter(
      (property) => property.price <= Number(maxPrice)
    );
  if (minBedroom)
    properties = properties.filter(
      (property) => property.beds >= Number(minBedroom)
    );
  if (maxBedroom)
    properties = properties.filter(
      (property) => property.beds <= Number(maxBedroom)
    );
  if (minBathroom)
    properties = properties.filter(
      (property) => property.beds >= Number(minBathroom)
    );
  if (maxBathroom)
    properties = properties.filter(
      (property) => property.beds <= Number(maxBathroom)
    );

  return properties;
}

export async function getAgentProperties(
  agentId: string
): Promise<PropertyType[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select()
    .eq("agent", agentId);
  if (error) console.log(error);
  return data || [];
}

export async function getPropertiesByAgent(
  agentId: string
): Promise<PropertyType[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select()
    .eq("agent", agentId)
    .eq("isPublished", true);

  if (error) console.log(error);
  return data || [];
}

export async function getProperty(
  propertyId: string
): Promise<PropertyType | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*, agent(*)")
    .eq("isPublished", true)
    .eq("id", propertyId);
  if (error) return null;
  return data[0];
}

export async function getPropertyToEdit(
  propertyId: string
): Promise<PropertyType | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select()
    .eq("id", propertyId);
  if (error) return null;
  return data[0];
}
