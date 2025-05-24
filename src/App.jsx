import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategoryList from "./components/CategoryList/CategoryList";
import NewCollection from "./components/NewCollection/NewCollection";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <CategoryList />
      </section>
      <section id="new">
        <NewCollection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
