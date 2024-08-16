import { AgentType } from "@/components/AgentPropertyOffers";

const agents: AgentType[] = [
  {
    id: "1",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
  {
    id: "2",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic-2.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
  {
    id: "3",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic-3.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
  {
    id: "4",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic-4.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
  {
    id: "5",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic-5.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
  {
    id: "6",
    firstname: "Chidi",
    lastname: "Okeke",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos.",
    imageUrl: "/profile-pic.jpg",
    companyName: "Treasure Estate",
    phoneNumber: "+2341234567890",
    workEmail: "chidi.okeke@gmail.com",
    facebook: "@chidiokeke",
    twitter: "@chidiokeke",
    linkedIn: "@chidiokeke",
    instagram: "@chidiokeke",
  },
];

export async function getAgents() {
  return agents;
}

export async function getAgent(agentId: string) {
  return agents.find((agent) => agent.id === agentId);
}

export async function getUserSession() {
  return agents[0];
}
