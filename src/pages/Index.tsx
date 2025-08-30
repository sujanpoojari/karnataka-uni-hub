import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import MainLoginSection from "@/components/MainLoginSection";
import UUCMSFooter from "@/components/UUCMSFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <MainHeader />
      <MainLoginSection />
      <UUCMSFooter />
    </div>
  );
};

export default Index;
