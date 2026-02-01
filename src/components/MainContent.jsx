import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import FeaturedProjects from "./FeaturedSection";
import FreelanceCTA from "./FreelanceCTA";
import ContactSection from "./ContactSection";


export default function MainContent({ config,offers,tech,projects }) {
  return (
    <main className="max-w-[auto] mx-auto ">
      <HeroSection config={config} />
      <AboutSection  config={config} />
      <ServicesSection offers={offers} />
      <SkillsSection tech={tech} />
      <FeaturedProjects projects={projects} />
      <FreelanceCTA config={config} />
      <ContactSection config={config} />
      <Footer config={config} />
      
    </main>
  );
}
