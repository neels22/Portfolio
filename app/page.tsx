import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="flixed top-0 -z-10 w-full"></div>

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
