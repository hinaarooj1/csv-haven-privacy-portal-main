
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationInterieure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Isolation Intérieure | Cameleon Renov</title>
        <meta name="description" content="Solutions d'isolation thermique par l'intérieur pour votre confort et vos économies d'énergie" />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation Thermique par l'Intérieur</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>L'isolation thermique par l'intérieur (ITI)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  L'isolation thermique par l'intérieur est une solution efficace pour améliorer la performance énergétique de votre logement. Cette technique consiste à installer des matériaux isolants sur les murs intérieurs de votre habitation, créant ainsi une barrière contre les pertes de chaleur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages de l'isolation intérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Coût généralement moins élevé que l'isolation extérieure</li>
                  <li>Possibilité d'isoler une seule pièce à la fois</li>
                  <li>Mise en œuvre rapide et simplicité d'installation</li>
                  <li>Solution idéale pour les bâtiments classés ou à façade historique</li>
                  <li>Amélioration immédiate du confort thermique</li>
                  <li>Réduction significative des factures d'énergie</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nos techniques d'isolation intérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nous proposons différentes solutions adaptées à vos besoins :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Isolation par complexes isolants :</strong> panneaux de plâtre préassemblés avec isolant</li>
                  <li><strong>Isolation par doublage sur ossature :</strong> création d'une structure métallique ou bois pour supporter l'isolant</li>
                  <li><strong>Isolation en matériaux biosourcés :</strong> laine de bois, chanvre, ouate de cellulose pour une démarche écologique</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Notre équipe de professionnels certifiés RGE vous accompagne dans le choix de la solution la plus adaptée à votre logement, tout en veillant à respecter les normes en vigueur et à préserver la qualité de l'air intérieur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Le processus d'intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Diagnostic complet de votre logement</li>
                  <li>Étude thermique et recommandations personnalisées</li>
                  <li>Proposition de solutions techniques adaptées</li>
                  <li>Établissement d'un devis détaillé</li>
                  <li>Réalisation des travaux par nos équipes qualifiées</li>
                  <li>Contrôle qualité et finitions soignées</li>
                  <li>Accompagnement pour les démarches d'aides financières</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IsolationInterieure;
