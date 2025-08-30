import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LoginSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
