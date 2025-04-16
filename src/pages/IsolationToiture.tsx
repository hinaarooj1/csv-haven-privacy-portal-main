
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationToiture = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation de la Toiture</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Qu’est-ce que c’est ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  La toiture représente le point de déperdition thermique le plus important dans un logement. Isoler cette zone s’avère donc prioritaire, qu’il s’agisse de combles perdus, de combles aménageables ou encore de toitures plates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages</CardTitle>
              </CardHeader>
              <CardContent>

                <ul className="list-disc pl-5 text-left space-y-2 text-gray-700">
                  <li><b>Réduction majeure des pertes de chaleur:</b> Limite les déperditions par le toit, pour un meilleur rendement énergétique.</li>
                  <li><b>Confort d’été renforcé:</b> Protège efficacement contre la chaleur, surtout sous les toits en pente mal ventilés ou les toitures plates exposées au soleil.</li>
                  <li><b>Longévité de la charpente:</b> Une bonne isolation limite les chocs thermiques et l’accumulation d’humidité, prolongeant la vie de la structure.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mise en Œuvre</CardTitle>
              </CardHeader>
              <CardContent>

                <ul className="list-disc text-left pl-5 space-y-2 text-gray-700">
                  <li><b>Combles perdus:</b> Soufflage d’isolant en vrac (laine de verre, ouate de cellulose, laine de roche, etc.) pour couvrir le plancher.</li>
                  <li><b>Combles aménageables:</b>
                    <ol>
                      <li>Isolation par l’intérieur (entre et sous chevrons)</li>

                      <li>
                        Isolation par l’extérieur (technique du sarking) si la toiture est à rénover intégralement</li>
                    </ol>
                  </li>
                  <li><b>Toitures plates:</b> Mise en place d’un complexe d’étanchéité (pare-vapeur, isolant, membrane d’étanchéité) afin de garantir l’évacuation des eaux pluviales et d’assurer la durabilité du revêtement.</li>
                  
                </ul>
               
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Les avantages de notre isolation de toiture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Réduction drastique des factures de chauffage et climatisation</li>
                  <li>Amélioration du confort thermique été comme hiver</li>
                  <li>Valorisation de votre patrimoine immobilier</li>
                  <li>Contribution à la réduction de votre empreinte carbone</li>
                  <li>Amélioration de l'isolation acoustique</li>
                  <li>Travaux éligibles aux aides financières (MaPrimeRénov', CEE...)</li>
                  <li>Installation par des professionnels certifiés RGE</li>
                </ul>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IsolationToiture;
