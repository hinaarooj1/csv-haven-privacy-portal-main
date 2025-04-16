
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Peinture = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Services de Peinturee</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Qu’est-ce que c’est ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les travaux de peinture recouvrent autant l’aspect décoratif que l’aspect technique, grâce à l’essor de peintures dites « thermo-réfléchissantes ». Ces dernières peuvent apporter un complément d’isolation ou limiter la surchauffe estivale, notamment sur les toits ou les façades exposées au soleil. </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages</CardTitle>
              </CardHeader>
              <CardContent>

                <ul className="list-disc text-left pl-5 space-y-2 text-gray-700">
                  <li><b>Esthétisme:</b> Renouveler l’aspect intérieur ou extérieur sans entreprendre de gros travaux.</li>
                  <li><b>Complément à l’isolation:</b> Certains revêtements réfléchissent les rayons solaires, contribuant à réduire légèrement la température en été.</li>
                  <li><b>Entretien et protection:</b> Prolonge la durée de vie des supports, limite les fissures et l’usure de la façade.</li>

                </ul>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mise en Œuvre</CardTitle>
              </CardHeader>
              <CardContent>

                <ul className="list-disc pl-5 space-y-2 text-left text-gray-700">
                  <li><b>Préparation du support:</b> Nettoyage, décapage éventuel, rebouchage des fissures, application d’une sous-couche.</li>
                  <li><b>Choix de la peinture:</b>
                    <ol>
                      <li>Peintures acryliques, glycéros ou minérales pour un usage classique
                      </li>
                      <li>Peintures « thermo-réfléchissantes » pour optimiser le confort d’été</li>
                    </ol>
                  </li>
                  <li><b>Application:</b> Respect des conditions d’application (température, hygrométrie) et du nombre de couches recommandé.</li>
                
                </ul>
               
              </CardContent>
            </Card>

            {/* <Card>
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
            </Card> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Peinture;
