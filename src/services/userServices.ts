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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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
    wishlist: [
      {
        id: "1",
        name: "Luxury Apartment in Lagos",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
        price: 50000000,
        location: {
          city: "Lagos",
          state: "Lagos",
        },
        type: "Apartment",
        agent: {
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
        views: 10,
        beds: 3,
        bath: 2,
        area: 150,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-25T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "2",
        name: "Spacious House in Abuja",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
        price: 150000,
        location: {
          city: "Abuja",
          state: "FCT",
        },
        type: "House",
        agent: {
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
        views: 10,
        beds: 4,
        bath: 3,
        area: 300,
        isRent: true,
        petsAllowed: false,
        dateCreated: "2024-06-24T16:34:11.031Z",
        isPublished: true,
      },
      {
        id: "3",
        name: "Elegant Duplex in Port Harcourt",
        yearBuilt: "2020",
        garageSpace: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque aut molestiae minus nisi iste quasi, error culpa nihil doloremque suscipit quidem sunt earum voluptatem labore nesciunt laborum harum sit!",
        images: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
        price: 35000000,
        location: {
          city: "Port Harcourt",
          state: "Rivers",
        },
        type: "Duplex",
        agent: {
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
        views: 10,
        beds: 5,
        bath: 4,
        area: 400,
        isRent: false,
        petsAllowed: true,
        dateCreated: "2024-06-23T16:34:11.031Z",
        isPublished: true,
      },
    ],
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