import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Mentor from '../components/Mentor';
import Methodology from '../components/Methodology';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';
import Transformation from '../components/Transformation';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Navbar from '../components/Navbar';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <ProblemSolution />
      <Mentor />
      <Methodology />
      <TargetAudience />
      <Pricing />
      <Transformation />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
