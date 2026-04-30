import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStats from '@/components/TrustStats';
import BenefitsSection from '@/components/BenefitsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <WhatsAppFloat />
      <Navbar />
      <HeroSection />
      <TrustStats />
      <BenefitsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
