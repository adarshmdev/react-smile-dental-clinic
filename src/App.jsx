


import React from 'react';

import Header from './components/Header';
import FloatingElements from './components/FloatingElements';
import HeroBanner from './components/HeroBanner';
import StatsBanner from './components/StatsBanner';
import TeamSection from './components/TeamSection';
import MonthlyOffersSection from './components/MonthlyOffersSection';
import SlidingServicesSection from './components/SlidingServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InsurancePartnersSection from './components/InsurancePartnersSection';
import LatestBlogs from './components/BlogCard';
import FAQAccordion from './components/FAQAccordion';
import AppointmentBanner from './components/AppointmentBanner';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';





const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingElements />
      <HeroBanner />
      <StatsBanner />
      <ServicesSection />
      <TeamSection />
      <MonthlyOffersSection />
      <SlidingServicesSection />
      <TestimonialsSection />
      <InsurancePartnersSection />
      <LatestBlogs />
      <FAQAccordion />
      <AppointmentBanner />
      <Footer />
    </div>
  );
};

export default App;