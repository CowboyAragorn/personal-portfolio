import Hero from "./Hero";
import Projects from "./Projects";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { useRef, useState, useEffect } from "react";
import Contact from "./Contact";
import Loader from "./Loader";

function App() {
  const [isLoading, setLoading] = useState(true);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  };
  const heroRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header
        heroClick={scrollToDiv.bind(this, heroRef)}
        projectsClick={scrollToDiv.bind(this, projectsRef)}
        contactClick={scrollToDiv.bind(this, contactRef)}
      />
      <Hero reference={heroRef} />
      <Projects reference={projectsRef} />
      <Contact reference={contactRef} />
    </ThemeProvider>
  );
}

export default App;
