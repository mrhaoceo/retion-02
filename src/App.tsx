import HeroDemo from './components/HeroDemo';
import ROICalculator from './components/ROICalculator';
import Pricing from './components/Pricing';

export default function App() {
  const scrollToPricing = () => {
    // Implementation can be added if a nav exists, currently handled by native scrolling
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <HeroDemo onScrollToPricing={scrollToPricing} />
      <ROICalculator />
      <Pricing />
      
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Retion.vn. Kiến tạo di sản doanh nghiệp.
        </p>
      </footer>
    </main>
  );
}
