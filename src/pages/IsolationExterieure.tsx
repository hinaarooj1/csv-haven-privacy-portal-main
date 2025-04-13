
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationExterieure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Isolation Extérieure | Cameleon Renov</title>
        <meta name="description" content="Solutions d'isolation thermique par l'extérieur pour votre confort et vos économies d'énergie" />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation Thermique par l'Extérieur</h1>

          <div className="relative rounded-lg overflow-hidden mb-8 h-64 md:h-80">
            <img
              src="/lovable-uploads/07775944-595b-4fea-a6e7-cb76f5a6e5a2.png"
              alt="Isolation extérieure"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>L'isolation thermique par l'extérieur (ITE)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  L'isolation thermique par l'extérieur consiste à envelopper votre maison d'une couche isolante depuis l'extérieur. Cette technique permet de traiter efficacement les ponts thermiques et d'améliorer considérablement la performance énergétique de votre habitation sans réduire la surface habitable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Les bénéfices de l'isolation extérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Excellente performance thermique en toutes saisons</li>
                  <li>Protection efficace contre les intempéries</li>
                  <li>Conservation de l'espace intérieur</li>
                  <li>Rénovation esthétique de la façade</li>
                  <li>Travaux réalisés sans perturber votre quotidien</li>
                  <li>Réduction notable des factures de chauffage et climatisation</li>
                  <li>Amélioration du confort acoustique</li>
                  <li>Valorisation de votre patrimoine immobilier</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notre expertise en isolation extérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Chez Cameleon Renov, nous maîtrisons parfaitement les différentes techniques d'isolation par l'extérieur :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Système ITE sous enduit :</strong> isolants fixés au mur et recouverts d'un enduit de finition</li>
                  <li><strong>Bardage ventilé :</strong> isolation avec lame d'air et finition en bardage bois, composite, etc.</li>
                  <li><strong>Vêture et vêtage :</strong> panneaux isolants préfabriqués avec parement intégré</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nos équipes certifiées RGE vous conseillent sur la solution la plus adaptée à votre habitation et à votre budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IsolationExterieure;
