const reviews = [
  {
    id: "1",
    user: {
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    agent: {
      id: "1",
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    rating: 5,
    comment:
      "The process of buying my first home was smooth and stress-free, thanks to their professional team!",
  },
  {
    id: "2",
    user: {
      firstname: "Amina",
      lastname: "Bello",
      imageUrl: "/profile-pic-2.jpg",
    },
    agent: {
      id: "1",
      firstname: "Amina",
      lastname: "Bello",
      imageUrl: "/profile-pic-2.jpg",
    },
    rating: 4,
    comment:
      "Excellent service! They helped me find the perfect apartment in a great neighborhood.",
  },
  {
    id: "3",
    user: {
      firstname: "Emeka",
      lastname: "Ibe",
      imageUrl: "/profile-pic-3.jpg",
    },
    agent: {
      id: "1",
      firstname: "Emeka",
      lastname: "Ibe",
      imageUrl: "/profile-pic-3.jpg",
    },
    rating: 5,
    comment:
      "Very knowledgeable agents who guided me through the entire selling process effortlessly.",
  },
  {
    id: "4",
    user: {
      firstname: "Funmi",
      lastname: "Adeyemi",
      imageUrl: "/profile-pic-4.jpg",
    },
    agent: {
      id: "1",
      firstname: "Funmi",
      lastname: "Adeyemi",
      imageUrl: "/profile-pic-4.jpg",
    },
    rating: 4,
    comment:
      "They were incredibly helpful in finding a rental property that met all my needs.",
  },
  {
    id: "5",
    user: {
      firstname: "Tunde",
      lastname: "Olawale",
      imageUrl: "/profile-pic-5.jpg",
    },
    agent: {
      id: "1",
      firstname: "Tunde",
      lastname: "Olawale",
      imageUrl: "/profile-pic-5.jpg",
    },
    rating: 5,
    comment:
      "Fantastic experience! Their team was professional and found the ideal property for my investment.",
  },
];

export async function getReviews(agentId: string) {
  return reviews.filter((review) => review.agent.id === agentId);
}
