
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationRampants = () => {
  return (
    <div className="flex flex-col min-h-screen">

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
                <CardTitle>Qu’est-ce que c’est ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les rampants désignent les pans inclinés de la toiture, au-dessus des espaces de vie dans des combles aménageables. Leur isolation est fondamentale pour maintenir la chaleur en hiver et limiter la surchauffe sous toit en été.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Les avantages de notre solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc text-left pl-5 space-y-2 text-gray-700">
                  <li>

                    <b>Confort toute l’année:</b> Température agréable, réduction des courants d’air et meilleure protection contre la chaleur estivale.
                  </li>
                  <li>
                    <b>Économies d’énergie:</b>  Diminution des déperditions de chaleur, donc baisse des dépenses de chauffage.

                  </li>
                  <li><b>Valorisation du logement:</b> Des combles aménagés et bien isolés ajoutent de la surface habitable et accroissent la valeur du bien.</li>

                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notre processus d'intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal text-left pl-5 space-y-2 text-gray-700">
                  <li><b>Analyse de la charpente:</b> Vérifier l’état général, la ventilation du toit et la présence éventuelle de points de faiblesse (fuites, moisissures).</li>
                  <li><b>Pose de l’isolant:</b>

                    <ol>
                      <li><i>Entre chevrons:</i> Première couche insérée entre les chevrons.

                      </li>
                      <li><i>Sous chevrons:</i> Deuxième couche en sous-face (double couche croisée).</li>
                    </ol>
                  </li>
                  <li><b>Étanchéité et finitions:</b> Mise en place d’un pare- ou frein-vapeur (ou d’une lame d’air) pour gérer l’humidité, puis pose d’un revêtement intérieur (plaques de plâtre, lambris, etc.).</li>
                   
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
