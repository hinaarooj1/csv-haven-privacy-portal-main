
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const IsolationToiture = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Isolation Toiture | Cameleon Renov</title>
        <meta name="description" content="Solutions d'isolation de toiture pour maximiser votre confort et réduire vos dépenses énergétiques" />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Isolation de Toiture</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Pourquoi isoler votre toiture ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  La toiture est responsable de 25 à 30% des déperditions thermiques d'une maison. Son isolation est donc primordiale pour réaliser des économies d'énergie significatives et améliorer votre confort au quotidien. Une toiture bien isolée vous protège aussi bien du froid en hiver que de la chaleur en été.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nos solutions d'isolation de toiture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Chez Cameleon Renov, nous proposons différentes techniques d'isolation adaptées à tous les types de toitures :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Isolation des combles perdus :</strong> par soufflage de laine minérale ou pose de rouleaux isolants</li>
                  <li><strong>Isolation des combles aménagés :</strong> isolation sous rampants par l'intérieur</li>
                  <li><strong>Isolation par l'extérieur :</strong> sarking, technique idéale lors d'une réfection de toiture</li>
                  <li><strong>Isolation des toitures terrasses :</strong> solutions spécifiques pour toits plats</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Les matériaux isolants que nous utilisons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nous sélectionnons des matériaux performants et durables :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Laine de roche et laine de verre :</strong> excellentes performances thermiques et acoustiques</li>
                  <li><strong>Ouate de cellulose :</strong> matériau écologique issu du recyclage</li>
                  <li><strong>Laine de bois :</strong> isolant naturel avec un déphasage thermique important</li>
                  <li><strong>Polyuréthane :</strong> pour une isolation performante avec une faible épaisseur</li>
                  <li><strong>Liège expansé :</strong> solution naturelle et durable</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nos conseillers vous aident à choisir le matériau le plus adapté à votre projet, en fonction de vos attentes en matière de performance, de budget et d'impact environnemental.
                </p>
              </CardContent>
            </Card>

            <Card>
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
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IsolationToiture;
