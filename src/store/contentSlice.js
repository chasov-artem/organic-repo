import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: {
    logo: "ALTANSCHOOL WEB COURSES",
    nav: ["HOME", "ABOUT", "SHOP", "NEW", "CONTACT"],
  },
  categories: [
    {
      id: 1,
      title: "Plants",
      image: "/frame1/shop1.png",
      image2x: "/frame1/shop1-2x.png",
    },
    {
      id: 2,
      title: "Pots",
      image: "/frame1/shop2.png",
      image2x: "/frame1/shop2-2x.png",
    },
    {
      id: 3,
      title: "Care",
      image: "/frame1/shop3.png",
      image2x: "/frame1/shop3-2x.png",
    },
    {
      id: 4,
      title: "Decor",
      image: "/frame1/shop4.png",
      image2x: "/frame1/shop4-2x.png",
    },
    {
      id: 5,
      title: "Seeds",
      image: "/frame1/shop5.png",
      image2x: "/frame1/shop5-2x.png",
    },
  ],
  newCollection: [
    {
      id: 1,
      title: "Monstera",
      image: "/frame1/collection1.png",
      image2x: "/frame1/collection1-2x.png",
    },
    {
      id: 2,
      title: "Ficus",
      image: "/frame1/collection2.png",
      image2x: "/frame1/collection2-2x.png",
    },
    {
      id: 3,
      title: "Sansevieria",
      image: "/frame1/collection3.png",
      image2x: "/frame1/collection3-2x.png",
    },
  ],
  newCollectionDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  about: {
    title: "About Us",
    text: "We are passionate about organic fashion and plants. Our mission is to bring nature closer to your home.",
    image: "/frame1/aboutus.png",
    image2x: "/frame1/aboutus-2x.png",
    button: "Learn More",
  },
  contact: {
    socials: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
    ],
    form: {
      fields: [
        { name: "name", placeholder: "Your name" },
        { name: "email", placeholder: "Your email address" },
        { name: "message", placeholder: "Enter your message" },
      ],
    },
    image: "/frame1/followus.png",
    image2x: "/frame1/followus-2x.png",
  },
  footer: {
    text: "© 2024 Organic Fashion",
  },
  hero: {
    image: "https://via.placeholder.com/220x220?text=Plant",
    title: "ORGANIC FASHION",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    button: "Shop Now",
  },
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // редьюсери
  },
});

export default contentSlice.reducer;
