
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationExterieure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation Extérieure (ITE)</h1>

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
                <CardTitle>Qu’est-ce que c’est ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                L’Isolation Thermique par l’Extérieur (ITE) consiste à envelopper la façade d’un bâtiment avec un matériau isolant, ensuite recouvert d’un enduit ou d’un bardage. Cette technique est particulièrement performante pour limiter les ponts thermiques et moderniser l’apparence extérieure.  </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5  text-left space-y-2 text-gray-700">
                  <li><b>Haute performance thermique: </b> L’isolant recouvre l’ensemble du bâti, réduisant les pertes aux jonctions plancher-mur, pignons, angles, etc.</li>
                  <li><b>	Préservation de l’intérieur: </b> Aucun empiètement sur la surface habitable, ce qui est un atout dans les espaces restreints.</li>
                <li><b>Rénovation de façade:</b> Possibilité de donner un style contemporain ou de rénover l’existant sans toucher à la décoration intérieure.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mise en Œuvre</CardTitle>
              </CardHeader>
              <CardContent>
                
                <ul className="list-disc pl-5 text-left  space-y-2 text-gray-700">
                  <li><b>Préparation du support:</b> Nettoyage et réparation des murs, vérification de la stabilité du support.</li>
                  <li><b>Pose de l’isolant:</b> Panneaux rigides ou semi-rigides (polystyrène, laine de roche, fibre de bois, etc.) fixés par chevillage ou collage.</li>
                  <li><b>Finitions extérieures:</b> Application d’un enduit (minéral, hydraulique, organique) ou installation d’un bardage (bois, métal, composite).</li>
                  <li><b>Traitement des points singuliers:</b> Encadrements de fenêtres, débords de toits, soubassements, et autres zones délicates pour assurer une parfaite étanchéité.</li>
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

export default IsolationExterieure;
