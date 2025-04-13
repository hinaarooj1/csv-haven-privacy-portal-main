
import React, { useState, useEffect } from 'react';
import { Shield, FileText, Link as LinkIcon, Cookie } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const [showMediationInfo, setShowMediationInfo] = useState(false);
  
  // Check if we should show mediation info based on URL hash
  useEffect(() => {
    if (window.location.hash === '#resolution-litiges') {
      setShowMediationInfo(true);
      // Scroll to the section
      const element = document.getElementById('resolution-litiges');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const toggleMediationInfo = (e) => {
    e.preventDefault();
    setShowMediationInfo(!showMediationInfo);
  };

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-[#2D5D2E]" />
            <h1 className="text-3xl font-bold text-gray-900">Mentions Légales</h1>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Informations légales</h2>
              <p className="text-gray-600 mb-4">Le site Cameleon Renov est édité pour le compte de  la société Cameleon Renov, EURL au capital de 18000€, immatriculée au RCS de Orléans sous le numéro 123 456 789.</p>
              <p className="text-gray-600 mb-4">
                Siège social : 7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS
              </p>
              <p className="text-gray-600 mb-4">
                Numéro de TVA intracommunautaire : FR 12 345 678 901
              </p>
              <p className="text-gray-600 mb-4">
                Téléphone : 02 45 48 33 96
              </p>
              <p className="text-gray-600 mb-4">
                Email : contact@cameleon-renov.fr
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Directeur de la publication</h2>
              <p className="text-gray-600 mb-4">
                M. Mohamed KEMACHE, Gérant de Cameleon Renov
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Hébergement</h2>
              <p className="text-gray-600 mb-4">
                Le site Cameleon Renov est hébergé par la société IONOS SARL, 7 Place DE LA GARE 57200 SARREGUEMINES.
              </p>
            </section>
            
            <section id="resolution-litiges">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Résolution des litiges</h2>
              <p className="text-gray-600 mb-4">
                En cas de litige, vous pouvez recourir au 
                <a href="#" onClick={toggleMediationInfo} className="text-[#2D5D2E] hover:underline font-medium"> 
                  médiateur de la consommation
                </a>.
              </p>
              
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
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">L'ensemble des éléments constituant ce site web (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont une propriété intellectuelle. Toute reproduction, représentation, modification, publication, ada e tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable du propriètaire</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Protection des données personnelles</h2>
              <p className="text-gray-600 mb-4">
                Cameleon Renov s'engage à protéger la vie privée de ses utilisateurs dans le respect des réglementations 
                en vigueur et en particulier du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016.
              </p>
              <p className="text-gray-600 mb-4">
                Les informations recueillies sur ce site sont destinées à Cameleon Renov afin de traiter vos demandes 
                et vous proposer des devis adaptés à vos besoins. Ces données sont conservées pendant la durée nécessaire 
                à la finalité du traitement, et vous disposez d'un droit d'accès, de rectification, d'opposition et de 
                suppression de vos données en nous contactant à l'adresse : rgpd@cameleon-renov.fr.
              </p>
            </section>
            
            <section id="cookies">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-[#2D5D2E]" />
                Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Le site Cameleon Renov utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez vous opposer 
                à l'utilisation des cookies en configurant votre navigateur ou en utilisant les options de consentement 
                disponibles sur notre site.
              </p>
              
              <h3 className="text-lg font-medium mb-2 text-gray-800">Qu'est-ce qu'un cookie ?</h3>
              <p className="text-gray-600 mb-4">
                Un cookie est un petit fichier texte stocké par votre navigateur qui permet au site web de 
                reconnaître votre appareil lors de visites ultérieures. Les cookies ne peuvent pas être utilisés 
                pour exécuter des programmes ou transmettre des virus à votre ordinateur.
              </p>
              
              <h3 className="text-lg font-medium mb-2 text-gray-800">Types de cookies utilisés</h3>
              <ul className="list-disc ml-5 text-gray-600 mb-4">
                <li><span className="font-medium">Cookies essentiels :</span> Nécessaires au fonctionnement du site</li>
                <li><span className="font-medium">Cookies d'analyse :</span> Pour comprendre comment les visiteurs utilisent notre site</li>
                <li><span className="font-medium">Cookies de préférences :</span> Pour mémoriser vos préférences</li>
                <li><span className="font-medium">Cookies marketing :</span> Pour vous proposer des publicités pertinentes (avec votre consentement)</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2 text-gray-800">Gestion de vos préférences</h3>
              <p className="text-gray-600 mb-4">
                Lors de votre première visite sur notre site, une bannière vous informe de l'utilisation de cookies 
                et vous demande d'accepter ou de refuser leur utilisation. Vous pouvez à tout moment modifier vos 
                préférences en supprimant les cookies dans les paramètres de votre navigateur.
              </p>
              
              <h3 className="text-lg font-medium mb-2 text-gray-800">Comment configurer votre navigateur</h3>
              <p className="text-gray-600 mb-4">
                La configuration pour la gestion des cookies varie pour chaque navigateur. Consultez le menu 
                d'aide de votre navigateur pour savoir comment modifier vos préférences en matière de cookies.
              </p>
              <p className="text-gray-600 mb-4">
                Pour plus d'informations sur les cookies et comment les gérer, visitez 
                <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-[#2D5D2E] hover:underline"> 
                  le site de la CNIL
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Terms;

