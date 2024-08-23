"use server";

export async function createListing(formData: FormData) {
  console.log("ASfasf");
  const newProperty = {
    name: formData.get("name"),
    yearBuilt: formData.get("yearBuilt"),
    parkingSpots: formData.get("parkingSpots"),
    description: formData.get("description"),
    images: formData.get("images"),
    price: formData.get("price"),
    city: formData.get("city"),
    state: formData.get("state"),
    type: formData.get("propertyType"),
    agent: formData.get("agent"),
    beds: formData.get("beds"),
    bath: formData.get("bath"),
    area: formData.get("area"),
    category: formData.get("category"),
    petsAllowed: formData.get("petsAllowed"),
    isPublished: true,
  };
  console.log(newProperty);
}
