import { ReviewType } from "@/components/Review";

const reviews: ReviewType[] = [
  {
    _id: "1",
    user: {
      _id: "4",
      firstname: "Funmi",
      lastname: "Adeyemi",
      imageUrl: "/profile-pic-4.jpg",
    },
    agent: {
      _id: "1",
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    rating: 5,
    upvotes: 3,
    downvotes: 2,
    propertyName: "Luxury Apartment in Lagos",
    dateCreated: "2024-06-25T16:34:11.031Z",
    comment:
      "The process of buying my first home was smooth and stress-free, thanks to their professional team!",
  },
  {
    _id: "2",
    user: {
      _id: "2",
      firstname: "Amina",
      lastname: "Bello",
      imageUrl: "/profile-pic-2.jpg",
    },
    agent: {
      _id: "1",
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    rating: 4,
    upvotes: 5,
    downvotes: 2,
    propertyName: "Luxury Apartment in Lagos",
    dateCreated: "2024-06-25T16:34:11.031Z",
    comment:
      "Excellent service! They helped me find the perfect apartment in a great neighborhood.",
  },
  {
    _id: "3",
    user: {
      _id: "3",
      firstname: "Emeka",
      lastname: "Ibe",
      imageUrl: "/profile-pic-3.jpg",
    },
    agent: {
      _id: "1",
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    rating: 5,
    upvotes: 3,
    downvotes: 2,
    propertyName: "Luxury Apartment in Lagos",
    dateCreated: "2024-06-25T16:34:11.031Z",
    comment:
      "Very knowledgeable agents who guided me through the entire selling process effortlessly.",
  },
  {
    _id: "4",
    user: {
      _id: "1",
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    agent: {
      _id: "4",
      firstname: "Funmi",
      lastname: "Adeyemi",
      imageUrl: "/profile-pic-4.jpg",
    },
    rating: 4,
    upvotes: 3,
    downvotes: 2,
    propertyName: "Luxury Apartment in Lagos",
    dateCreated: "2024-06-25T16:34:11.031Z",
    comment:
      "They were incredibly helpful in finding a rental property that met all my needs.",
  },
  {
    _id: "5",
    user: {
      _id: "5",
      firstname: "Tunde",
      lastname: "Olawale",
      imageUrl: "/profile-pic-5.jpg",
    },
    agent: {
      _id: "5",
      firstname: "Tunde",
      lastname: "Olawale",
      imageUrl: "/profile-pic-5.jpg",
    },
    rating: 5,
    upvotes: 3,
    downvotes: 2,
    propertyName: "Luxury Apartment in Lagos",
    dateCreated: "2024-06-25T16:34:11.031Z",
    comment:
      "Fantastic experience! Their team was professional and found the ideal property for my investment.",
  },
];

export async function getReviews(agentId: string) {
  return reviews.filter((review) => review.agent.id === agentId);
}

export async function getAllUserReviews(userId: string) {
  return reviews.filter(
    (review) => review.agent.id === userId || review.user.id === userId
  );
}
