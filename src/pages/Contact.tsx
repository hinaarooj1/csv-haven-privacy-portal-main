
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import AgencyInfo from '@/components/AgencyInfo';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [showMediationInfo, setShowMediationInfo] = useState(false);

  const toggleMediationInfo = (e) => {
    e.preventDefault();
    setShowMediationInfo(!showMediationInfo);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <ContactHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
              <ContactInfo />
            </div>
            
            <AgencyInfo />
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-[#2D5D2E]" />
              <h3 className="text-lg font-medium text-gray-900">Médiation de la consommation</h3>
            </div>
            <p className="text-gray-600">
              En cas de litige, vous pouvez recourir au <a href="#" onClick={toggleMediationInfo} className="text-[#2D5D2E] hover:underline font-medium">médiateur de la consommation</a>.
            </p>
            
            {showMediationInfo && (
              <div className="mt-4 bg-[#F5E6D3] p-4 rounded-lg">
                <p className="text-gray-600">
                  En cas de litige, vous pouvez recourir au médiateur de la consommation CNPM Médiation Consommation :
                </p>
                <ul className="list-disc pl-6 text-gray-600 mt-2">
                  <li>
                    Site internet : <a href="https://cnpm-mediation-consommation.eu/" target="_blank" rel="noopener noreferrer" className="text-[#2D5D2E] hover:underline">https://cnpm-mediation-consommation.eu/</a>
                  </li>
                  <li>
                    Adresse postale : CNPM Médiation Consommation – 27 avenue de la Libération, 42400 Saint-Chamond
                  </li>
                </ul>
                <p className="text-gray-600 mt-2">
                  Cette procédure s'inscrit dans le cadre des articles L.616-1 et R.616-1 du code de la consommation.
                </p>
              </div>
            )}
            
            <p className="mt-4 text-gray-600">
              Pour plus d'informations, consultez notre <Link to="/mentions-legales#resolution-litiges" className="text-[#2D5D2E] hover:underline">Mentions Légales</Link>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
