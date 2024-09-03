import Image from "next/image";
import Hero from "./hero/page";
import Nav from "./nav/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <footer /> */}
      <About />
      
    </div>
  );
}
