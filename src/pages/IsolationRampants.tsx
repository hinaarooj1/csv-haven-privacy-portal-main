
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationRampants = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Isolation des Rampants | Cameleon Renov</title>
        <meta name="description" content="Solutions d'isolation des rampants pour votre confort et vos économies d'énergie" />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation des Rampants</h1>

          <div className="relative rounded-lg overflow-hidden mb-8 h-64 md:h-80">
            <img
              src="/lovable-uploads/32f7ddf0-589f-4729-88dc-7ffd7983b37d.png"
              alt="Isolation des rampants"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Qu'est-ce que l'isolation des rampants ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  L'isolation des rampants concerne l'isolation de la toiture en pente de votre habitation. Cette solution est indispensable pour améliorer la performance énergétique de votre maison, car le toit est responsable de 25 à 30% des déperditions de chaleur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Les avantages de notre solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Réduction significative des déperditions thermiques</li>
                  <li>Amélioration du confort été comme hiver</li>
                  <li>Économies sur vos factures énergétiques</li>
                  <li>Matériaux écologiques et durables</li>
                  <li>Intervention rapide et propre par nos équipes qualifiées</li>
                  <li>Éligible aux aides financières de l'État</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notre processus d'intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Visite technique et évaluation de vos besoins</li>
                  <li>Proposition d'une solution adaptée à votre habitation</li>
                  <li>Devis détaillé et transparent</li>
                  <li>Planification de l'intervention</li>
                  <li>Réalisation des travaux par nos équipes certifiées RGE</li>
                  <li>Contrôle qualité et nettoyage du chantier</li>
                  <li>Service après-vente et garantie décennale</li>
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

export default IsolationRampants;
