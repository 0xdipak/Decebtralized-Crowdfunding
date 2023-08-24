import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectWork from "@/components/ProjectWork";
import Transactions from "@/components/Transactions";


export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <ProjectWork />
      <Transactions />
      <Footer />
    </div>
  );
}


