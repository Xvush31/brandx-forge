import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import BestSellers from '@/components/BestSellers';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <BestSellers />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
