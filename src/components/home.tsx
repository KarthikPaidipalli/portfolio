import { useBackgroundColor } from "../context/context";
import About from "./about";
import Contacts from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  const { bgColor, textColor } = useBackgroundColor();
  
  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <Hero />
      <About/>
      <Skills />
      <Projects/>
      <Contacts/>
    </div>
  );
}