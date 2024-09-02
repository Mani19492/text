import Image from "next/image";
import Hero from "./hero/page";
import Nav from "./nav/page";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
