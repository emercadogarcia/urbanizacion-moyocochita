'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ColegioSection from '@/components/ColegioSection';
import BenefitsSection from '@/components/BenefitsSection';
import GallerySection from '@/components/GallerySection';
import CierreSection from '@/components/CierreSection';
import FormSection from '@/components/FormSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <WhatsAppFloat />
      <HeroSection />
      <div className="bg-[#1C4422] text-white text-center py-3 px-5 text-sm font-medium tracking-wide">
        🔥 <strong>Oferta de preventa limitada</strong> — Los lotes frente al área escolar se están agotando. Consulta hoy.
      </div>
      <TrustSection />
      <ColegioSection />
      <BenefitsSection />
      <GallerySection />
      <CierreSection />
      <FormSection />
      <MapSection />
      <Footer />
    </main>
  );
}
