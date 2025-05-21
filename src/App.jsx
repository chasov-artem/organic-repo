import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategoryList from "./components/CategoryList/CategoryList";
import NewCollection from "./components/NewCollection/NewCollection";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <CategoryList />
      <NewCollection />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
