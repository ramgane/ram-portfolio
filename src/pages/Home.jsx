import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ConfigData from '../data/config.json';
import TechData from '../data/teches.json';
import ProjectData from '../data/projects.json';
import OffersData from '../data/offers.json';

export default function Home() {
  const [config, setConfig] = useState(null);
  const [offers, setOffers] = useState(null);
  const [tech, settech] = useState(null);
  const [projects, setprojects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 🔥 start loading

      try {


        const configRes = ConfigData;
        setConfig(configRes);
        const offersRes = OffersData;
        setOffers(offersRes);
        const techRes = TechData;
        settech(techRes);
        const projectRes = ProjectData;
        setprojects(projectRes)

      } catch (error) {
        console.error("Data fetch failed:", error);
      } finally {
        setLoading(false); // ✅ runs only once after BOTH complete
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-gray-700 rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-400 text-lg font-medium">Loading...</p>
      </div>

    );
  }

  return (
    <div className="font-display bg-background-dark text-slate-100 min-h-screen">
      <Header config={config} />
       <MainContent config={config} offers={offers} tech={tech} projects={projects} />
    </div>
  );
}
