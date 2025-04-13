import React from 'react';
import { ArrowLeft, Shield, Download, Printer, User, Lock, Eye, FileText, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "15 juillet 2023";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-[#2D5D2E] hover:text-[#1A3C1B] mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-[#2D5D2E] mr-2" />
                <h1 className="text-3xl font-bold text-gray-900">Politique de Confidentialité</h1>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1 border-[#2D5D2E] text-[#2D5D2E] hover:bg-[#2D5D2E]/10">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Télécharger</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 border-[#2D5D2E] text-[#2D5D2E] hover:bg-[#2D5D2E]/10">
                  <Printer className="h-4 w-4" />
                  <span className="hidden sm:inline">Imprimer</span>
                </Button>
              </div>
            </div>
            
            <p className="text-gray-500 mt-2">Dernière mise à jour: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-green max-w-none bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-[#2D5D2E]" />
              <p className="text-lg font-medium text-gray-800">
                Cette politique de confidentialité décrit comment nous traitons vos données personnelles 
                lorsque vous utilisez nos services d'isolation et notre site web.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-[#2D5D2E]" />
              1. Collecte des données personnelles
            </h2>
            <p className="text-gray-600 mb-4">
              Chez Cameleon Renov, nous collectons les informations suivantes lorsque vous utilisez 
              notre site web ou faites appel à nos services d'isolation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Informations d'identification (nom, prénom, adresse postale, adresse e-mail, numéro de téléphone)</li>
              <li>Informations relatives à votre logement (type de logement, superficie, année de construction)</li>
              <li>Informations financières pour le traitement des paiements</li>
              <li>Données d'utilisation du site web (pages visitées, durée de la visite)</li>
              <li>Informations techniques (adresse IP, type de navigateur, appareil utilisé)</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-[#2D5D2E]" />
              2. Utilisation des données
            </h2>
            <p className="text-gray-600 mb-4">
              Nous utilisons vos données personnelles aux fins suivantes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Établir un devis personnalisé pour vos travaux d'isolation</li>
              <li>Réaliser les travaux d'isolation commandés</li>
              <li>Vous informer sur l'avancement de votre projet</li>
              <li>Vous conseiller sur les aides financières disponibles</li>
              <li>Procéder au traitement des paiements</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#2D5D2E]" />
              3. Sécurité des données
            </h2>
            <p className="text-gray-600 mb-6">
              La sécurité de vos données personnelles est notre priorité. Nous mettons en œuvre 
              des mesures de sécurité appropriées pour protéger contre l'accès non autorisé, la modification, 
              la divulgation ou la destruction de vos données. Ces mesures comprennent:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Cryptage des données sensibles</li>
              <li>Protection par mot de passe des systèmes informatiques</li>
              <li>Accès limité aux données personnelles pour le personnel autorisé</li>
              <li>Audits réguliers de nos pratiques de sécurité</li>
              <li>Formation du personnel aux bonnes pratiques de sécurité</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4. Partage des données</h2>
            <p className="text-gray-600 mb-6">
              Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons toutefois les 
              partager dans les situations suivantes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Avec nos sous-traitants intervenant dans la réalisation des travaux</li>
              <li>Avec nos prestataires de services informatiques (hébergement, maintenance)</li>
              <li>Avec les organismes financeurs dans le cadre des aides à l'isolation</li>
              <li>Avec les autorités compétentes si la loi nous y oblige</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5. Conservation des données</h2>
            <p className="text-gray-600 mb-6">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
              à la réalisation des finalités pour lesquelles elles ont été collectées:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Données relatives aux devis non suivis d'une commande: 3 ans</li>
              <li>Données relatives aux clients: 10 ans après la fin de la relation commerciale</li>
              <li>Données de navigation: 13 mois maximum</li>
              <li>Données nécessaires à l'établissement de la preuve d'un droit: durée de prescription légale</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#2D5D2E]" />
              6. Cookies et technologies similaires
            </h2>
            <p className="text-gray-600 mb-4">
              Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience 
              de navigation et analyser l'utilisation du site. Vous pouvez gérer vos préférences en matière 
              de cookies à tout moment via notre bandeau de cookies ou les paramètres de votre navigateur.
            </p>
            <p className="text-gray-600 mb-6">
              Nous utilisons différents types de cookies:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Cookies essentiels: nécessaires au fonctionnement du site</li>
              <li>Cookies analytiques: pour comprendre comment les visiteurs utilisent notre site</li>
              <li>Cookies de fonctionnalité: pour mémoriser vos préférences</li>
              <li>Cookies publicitaires: pour vous proposer des publicités pertinentes (avec votre consentement)</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7. Vos droits</h2>
            <p className="text-gray-600 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
              <li>Droit d'introduire une réclamation auprès d'une autorité de contrôle</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante: <span className="break-all">rgpd@cameleon-renov.fr</span> 
              ou par courrier à: Cameleon Renov - Service Protection des Données, 7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8. Modifications de cette politique</h2>
            <p className="text-gray-600 mb-6">
              Nous pouvons mettre à jour notre politique de confidentialité périodiquement. Nous vous informerons 
              de tout changement significatif par un avis visible sur notre site web ou par e-mail. Nous vous 
              encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9. Nous contacter</h2>
            <p className="text-gray-600 mb-6">
              Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière 
              de protection des données, n'hésitez pas à nous contacter:
            </p>
            <ul className="list-none pl-0 mb-6 text-gray-600">
              <li>Par e-mail: <span className="break-all">rgpd@cameleon-renov.fr</span></li>
              <li>Par téléphone: 02 45 48 33 96</li>
              <li>Par courrier: Cameleon Renov - Service Protection des Données, 7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS</li>
            </ul>
            
            <Separator className="my-8" />
            
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Cameleon Renov. Tous droits réservés.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
