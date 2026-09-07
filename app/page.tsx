import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />
      <Showcase />
      <Footer />
    </div>
  );
}
