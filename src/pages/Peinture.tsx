
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Peinture = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Services de Peinture | Cameleon Renov</title>
        <meta name="description" content="Services de peinture intérieure et extérieure professionnels pour embellir votre habitation" />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Services de Peinture</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Nos services de peinture professionnels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Chez Cameleon Renov, nous proposons des services de peinture de haute qualité pour l'intérieur et l'extérieur de votre habitation. Notre équipe de peintres expérimentés s'engage à transformer vos espaces avec précision, propreté et dans le respect des délais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peinture intérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nos services de peinture intérieure comprennent :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Peinture des murs et plafonds</li>
                  <li>Techniques décoratives (enduits décoratifs, effets matière)</li>
                  <li>Peinture des boiseries et radiateurs</li>
                  <li>Pose de revêtements muraux (papier peint, toile de verre)</li>
                  <li>Conseils en décoration et choix des couleurs</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nous utilisons des peintures de qualité professionnelle, respectueuses de l'environnement et à faible teneur en COV pour préserver la qualité de l'air dans votre intérieur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peinture extérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pour l'extérieur de votre habitation, nous proposons :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Ravalement de façade</li>
                  <li>Peinture de façade</li>
                  <li>Traitement et peinture des boiseries extérieures</li>
                  <li>Peinture des ferronneries</li>
                  <li>Imperméabilisation des murs</li>
                  <li>Traitement anti-mousse et anti-humidité</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nos peintures extérieures sont sélectionnées pour leur résistance aux intempéries, aux UV et aux variations de température, garantissant ainsi une durabilité optimale de vos travaux.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notre engagement qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Préparation minutieuse des surfaces (ponçage, rebouchage, sous-couche)</li>
                  <li>Utilisation de matériaux et peintures de qualité professionnelle</li>
                  <li>Protection soigneuse de vos meubles et sols</li>
                  <li>Respect des normes environnementales</li>
                  <li>Finitions impeccables</li>
                  <li>Nettoyage du chantier après intervention</li>
                  <li>Garantie sur nos travaux</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Peinture;
