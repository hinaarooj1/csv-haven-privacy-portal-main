
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Phone, Award, CheckCircle, Clock, Link as LinkIcon, Scale, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const [showMediationInfo, setShowMediationInfo] = useState(false);
  const currentYear = new Date().getFullYear();
  
  const toggleMediationInfo = (e) => {
    e.preventDefault();
    setShowMediationInfo(!showMediationInfo);
  };
  
  return <footer className="bg-[#F5E6D3] border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/7cc4ad4a-957b-4043-b2cb-2ced3927deb6.png" alt="Cameleon Renov" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">Cameleon Renov</span>
            </div>
            <p className="text-gray-600 mb-4">
              Solutions d'isolation écologiques et économiques pour votre confort et vos économies d'énergie.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Clock className="h-6 w-6 text-[#2D5D2E]" />
              <span className="text-lg md:text-xl font-bold text-gray-700">10 ans d'expérience</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Award className="h-6 w-6 text-[#2D5D2E]" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">Certifié RGE Qualibat</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-5 w-5 text-[#2D5D2E]" />
              <span className="text-base font-medium text-gray-700">Fabriqué en France</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/isolation-rampants" className="text-gray-600 hover:text-[#2D5D2E]">
                  Isolation des Rampants
                </Link>
              </li>
              <li>
                <Link to="/isolation-exterieure" className="text-gray-600 hover:text-[#2D5D2E]">
                  Isolation Extérieure
                </Link>
              </li>
              <li>
                <Link to="/isolation-interieure" className="text-gray-600 hover:text-[#2D5D2E]">
                  Isolation Intérieure
                </Link>
              </li>
              <li>
                <Link to="/peinture" className="text-gray-600 hover:text-[#2D5D2E]">
                  Peinture
                </Link>
              </li>
              <li>
                <Link to="/isolation-toiture" className="text-gray-600 hover:text-[#2D5D2E]">
                  Isolation Toiture
                </Link>
              </li>
              <li>
                <Link to="/aides-financieres" className="text-gray-600 hover:text-[#2D5D2E]">
                  Aides Financières
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="text-gray-600 hover:text-[#2D5D2E]">
                  Témoignages Clients
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Nos Partenaires</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.solulec.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2D5D2E] flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-[#2D5D2E]" />
                  www.solulec.com
                </a>
              </li>
              <li>
                <a href="https://www.actuelo.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2D5D2E] flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-[#2D5D2E]" />
                  www.actuelo.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-gray-600 hover:text-[#2D5D2E]">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-gray-600 hover:text-[#2D5D2E]">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-gray-600 hover:text-[#2D5D2E]">
                  CGV
                </Link>
              </li>
              <li>
                <a href="#" onClick={toggleMediationInfo} className="text-gray-600 hover:text-[#2D5D2E] flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[#2D5D2E]" />
                  Médiateur de la consommation
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-[#2D5D2E]" />
                <span className="text-gray-700">02 45 48 33 96</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#2D5D2E]" />
                <a href="mailto:contact@cameleon-renov.fr" className="text-gray-700 hover:text-[#2D5D2E]">contact@cameleon-renov.fr</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          {showMediationInfo && (
            <div className="bg-[#F5E6D3] p-4 rounded-lg mb-4">
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
        </div>

        <div className="border-t border-gray-200 mt-4 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61575078267301" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#2D5D2E] transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/cameleon.renov?igsh=MXhrNXRhZHM3aW9icA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#2D5D2E] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-kemache-03335035a/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#2D5D2E] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/CameleonRenov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#2D5D2E] transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            &copy; {currentYear} Cameleon Renov. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-500">On isole aussi vos données</span>
            <Shield className="h-4 w-4 text-[#2D5D2E]" />
            <Link to="/politique-de-confidentialite" className="text-[#2D5D2E] text-sm font-medium hover:underline">
              Paramètres
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
