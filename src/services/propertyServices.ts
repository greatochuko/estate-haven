import { PropertySearchParams } from "@/app/properties/page";
import { PropertyType } from "@/components/Property";
import { createClient } from "@/utils/supabase/client";

// const properties: PropertyType[] = [
//   {
//     _id: "1",
//     name: "Luxury Apartment in Lagos",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
//     price: 50000000,
//     city: "Lagos",
//     state: "Lagos",
//     type: "Apartment",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 3,
//     bath: 2,
//     area: 150,
//     category: "sale",
//     petsAllowed: true,
//     dateCreated: "2024-06-25T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "2",
//     name: "Spacious House in Abuja",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
//     price: 150000,
//     city: "Abuja",
//     state: "FCT",
//     type: "House",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 4,
//     bath: 3,
//     area: 300,
//     category: "rent",
//     petsAllowed: false,
//     dateCreated: "2024-06-24T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "3",
//     name: "Elegant Duplex in Port Harcourt",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
//     price: 35000000,
//     city: "Port Harcourt",
//     state: "Rivers",
//     type: "Duplex",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 5,
//     bath: 4,
//     area: 400,
//     category: "sale",
//     petsAllowed: true,
//     dateCreated: "2024-06-23T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "4",
//     name: "Modern Apartment in Kano",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-4.jpg", "/property-4.jpg", "/property-4.jpg"],
//     price: 100000,
//     city: "Kano",
//     state: "Kano",
//     type: "Apartment",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 2,
//     bath: 1,
//     area: 120,
//     category: "rent",
//     petsAllowed: false,
//     dateCreated: "2024-06-22T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "5",
//     name: "Family House in Ibadan",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-5.jpg", "/property-5.jpg", "/property-5.jpg"],
//     price: 45000000,
//     city: "Ibadan",
//     state: "Oyo",
//     type: "House",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 4,
//     bath: 3,
//     area: 350,
//     category: "sale",
//     petsAllowed: false,
//     dateCreated: "2024-06-21T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "6",
//     name: "Cozy Studio in Enugu",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-6.jpg", "/property-6.jpg", "/property-6.jpg"],
//     price: 80000,
//     city: "Enugu",
//     state: "Enugu",
//     type: "Studio",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 1,
//     bath: 1,
//     area: 80,
//     category: "rent",
//     petsAllowed: false,
//     dateCreated: "2024-06-20T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "7",
//     name: "Charming Bungalow in Benin City",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-7.jpg", "/property-7.jpg", "/property-7.jpg"],
//     price: 25000000,
//     city: "Benin City",
//     state: "Edo",
//     type: "House",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 3,
//     bath: 2,
//     area: 200,
//     category: "sale",
//     petsAllowed: true,
//     dateCreated: "2024-06-19T16:34:11.031Z",
//     isPublished: true,
//   },
//   {
//     _id: "8",
//     name: "Affordable Apartment in Kaduna",
//     yearBuilt: "2020",
//     parkingSpots: 2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
//     images: ["/property-8.jpg", "/property-8.jpg", "/property-8.jpg"],
//     price: 200000,
//     city: "Kaduna",
//     state: "Kaduna",
//     type: "Apartment",
//     agent: {
//       _id: "1",
//       firstname: "Chidi",
//       lastname: "Okeke",
//       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
//       imageUrl: "/profile-pic.jpg",
//       companyName: "Treasure Estate",
//       phoneNumber: "+2341234567890",
//       workEmail: "chidi.okeke@gmail.com",
//       facebook: "@chidiokeke",
//       twitter: "@chidiokeke",
//       linkedIn: "@chidiokeke",
//       instagram: "@chidiokeke",
//     },
//     views: 10,
//     beds: 2,
//     bath: 2,
//     area: 150,
//     category: "rent",
//     petsAllowed: true,
//     dateCreated: "2024-06-18T16:34:11.031Z",
//     isPublished: true,
//   },
// ];

export async function getProperties(): Promise<PropertyType[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*, agent(*)")
    .eq("isPublished", true);
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
    .eq("isPublished", true);
  if (error) return null;
  return data[0];
}

export async function getPropertyToEdit(
  propertyId: string
): Promise<PropertyType | null> {
  const supabase = createClient();
  const { data, error } = await supabase.from("properties").select();
  if (error) return null;
  return data[0];
}
