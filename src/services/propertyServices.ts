import { PropertyType } from "@/components/Property";
import { connectDB } from "@/db/connectDB";
import { Property } from "@/db/models/Property";

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
  await connectDB();

  const properties = await Property.find({ isPublished: true });
  return JSON.parse(JSON.stringify(properties));
}

export async function getAgentProperties(
  agentId: string
): Promise<PropertyType[]> {
  await connectDB();

  const agentProperties = await Property.find({
    agent: agentId,
  });

  return JSON.parse(JSON.stringify(agentProperties));
}

export async function getPropertiesByAgent(
  agentId: string
): Promise<PropertyType[]> {
  await connectDB();

  const agentProperties = await Property.find({
    isPublished: true,
    agent: agentId,
  });

  return JSON.parse(JSON.stringify(agentProperties));
}

export async function getProperty(
  propertyId: string
): Promise<PropertyType | null> {
  await connectDB();

  const property = await Property.findById(propertyId);
  if (!property.isPublished) return null;
  return JSON.parse(JSON.stringify(property));
}

export async function getPropertyToEdit(
  propertyId: string
): Promise<PropertyType | null> {
  await connectDB();

  const property = await Property.findById(propertyId);
  return JSON.parse(JSON.stringify(property));
}

export async function toggleLikeProperty() {
  return true;
}
