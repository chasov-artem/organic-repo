import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: {
    logo: "Organic Fashion",
    nav: ["Home", "About", "Shop", "New", "Contact"],
  },
  categories: [
    { id: 1, title: "Plants", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Pots", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Care", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Decor", image: "https://via.placeholder.com/150" },
  ],
  newCollection: [
    { id: 1, title: "Monstera", image: "https://via.placeholder.com/120" },
    { id: 2, title: "Ficus", image: "https://via.placeholder.com/120" },
    { id: 3, title: "Sansevieria", image: "https://via.placeholder.com/120" },
  ],
  about: {
    title: "About Us",
    text: "We are passionate about organic fashion and plants. Our mission is to bring nature closer to your home.",
    image: "https://via.placeholder.com/200",
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
    image: "https://via.placeholder.com/200",
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
