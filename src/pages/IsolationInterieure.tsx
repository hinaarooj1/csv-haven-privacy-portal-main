
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationInterieure = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation Thermique par l'Intérieur</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Qu’est-ce que c’est ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  L’isolation par l’intérieur consiste à poser un isolant sur la face interne des murs extérieurs. Elle est souvent privilégiée dans les bâtiments dont on souhaite conserver l’apparence extérieure, notamment lorsqu’ils présentent un caractère architectural particulier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-left  text-gray-700">
                  <li><b>Coût global moins élevé:</b> Souvent moins cher que l’isolation par l’extérieur, notamment pour les petits chantiers.

                  </li>
                  <li><b>Aucune modification de façade:</b> L’aspect extérieur n’est pas impacté, préservant le cachet ou respectant d’éventuelles contraintes locales.
                  </li>
                  <li><b>Intervention ciblée:</b> Possibilité d’isoler pièce par pièce en fonction des priorités (chambres, pièces de vie, etc.).</li>

                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mise en Œuvre</CardTitle>
              </CardHeader>
              <CardContent>
                
                <ul className="list-disc pl-5 space-y-2  text-left text-gray-700">
                  <li><strong>Préparation des murs:</strong> Nettoyage, rebouchage des fissures, vérification de l’absence d’humidité.</li>
                  <li><strong>Installation de l’isolant:</strong> 
                  
                  <ol>
                    <li>Panneaux ou rouleaux de laine minérale/végétale (fixés sur ossature métallique ou collés)

</li>
<li>Pare-vapeur pour maîtriser l’humidité</li>
                  </ol>
                  </li>
                  <li><strong>Finition: </strong> Plaques de plâtre ou lambris pour la face intérieure, en veillant à limiter les ponts thermiques (coins, angles, jonctions menuiseries).</li>
                  <li><strong>Gestion de la surface habitable:</strong>  Prendre en compte la légère diminution d’espace.</li>
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

export default IsolationInterieure;
