import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import CampaignBanner from "@/components/CampaignBanner";
import EditorialSection from "@/components/EditorialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <CampaignBanner />
        <EditorialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
