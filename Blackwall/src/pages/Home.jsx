import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import DeploymentPhases from '../components/home/DeploymentPhases';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ServicesPreview />
      <DeploymentPhases />
      <CTASection />
    </div>
  );
}