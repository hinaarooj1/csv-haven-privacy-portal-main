import React from 'react';
import { PiggyBank, Calculator, ArrowRight, FileText, Home, Check, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const FinancialAid = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Aides Financières</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les différentes aides disponibles pour financer votre projet d'isolation
            </p>
          </div>
          
          <Tabs defaultValue="maPrimeRenov" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="maPrimeRenov">MaPrimeRénov'</TabsTrigger>
              <TabsTrigger value="cee">CEE</TabsTrigger>
              <TabsTrigger value="ecoPtz">Éco-PTZ</TabsTrigger>
              <TabsTrigger value="other">Autres aides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="maPrimeRenov">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-8 w-8 text-[#2D5D2E]" />
                  <h2 className="text-2xl font-bold">MaPrimeRénov' : L'Aide Phare de l'État</h2>
                </div>
                
                <p className="mb-6">
                  MaPrimeRénov' est le dispositif principal pour financer des travaux de rénovation énergétique. 
                  Il se décline en deux volets principaux pour s'adapter à différents projets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Parcours par Geste</h3>
                    <p className="text-gray-600 mb-4">
                      Pour des travaux isolés comme l'isolation, le chauffage ou la ventilation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Logement de plus de 15 ans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Résidence principale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Travaux réalisés par un professionnel RGE</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Parcours Accompagné</h3>
                    <p className="text-gray-600 mb-4">
                      Pour des rénovations globales avec un gain minimum de 2 classes énergétiques.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Audit énergétique obligatoire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Accompagnement par un expert "Mon Accompagnateur Rénov'"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Financement jusqu'à 90% pour les ménages modestes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                
              </Card>
            </TabsContent>
            
            <TabsContent value="cee">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <PiggyBank className="h-8 w-8 text-[#2D5D2E]" />
                  <h2 className="text-2xl font-bold">Prime Énergie (CEE)</h2>
                </div>
                
                <p className="mb-6">
                  Gérée via le dispositif des Certificats d'Économies d'Énergie (CEE), cette prime est cumulable avec MaPrimeRénov'.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Éligibilité</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Ouverte à tous (propriétaires, locataires)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Pour résidences principales ou secondaires de plus de 2 ans</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Travaux couverts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Isolation thermique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Chauffage performant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>VMC double flux</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-medium">Montant : Jusqu'à 5 560 € selon les économies d'énergie générées</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="ecoPtz">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-8 w-8 text-[#2D5D2E]" />
                  <h2 className="text-2xl font-bold">Éco-Prêt à Taux Zéro (Éco-PTZ)</h2>
                </div>
                
                <p className="mb-6">
                  Un prêt sans intérêt et sans condition de revenus pour financer des travaux de performance énergétique.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Caractéristiques</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Prêt sans intérêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Sans condition de revenus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#2D5D2E] mt-0.5 flex-shrink-0" />
                        <span>Remboursable sur 20 ans</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Montant</h3>
                    <p className="text-2xl font-bold text-[#2D5D2E]">Jusqu'à 50 000 €</p>
                    <p className="mt-4">
                      Ce montant peut financer l'intégralité de vos travaux de rénovation énergétique,
                      sous réserve de respecter les critères d'éligibilité.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="other">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-8 w-8 text-[#2D5D2E]" />
                  <h2 className="text-2xl font-bold">Autres Aides Disponibles</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">TVA à 5,5 %</h3>
                    <p className="mb-4">
                      Applicable sur les travaux d'amélioration énergétique dans les résidences principales 
                      de plus de 2 ans, sous réserve d'utiliser des professionnels RGE.
                    </p>
                  </div>
                  
                  <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">Aides Locales</h3>
                    <p className="mb-4">
                      Subventions régionales ou départementales complémentaires aux dispositifs nationaux.
                    </p>
                    <p>
                      Exemple : L'Île-de-France propose des compléments de financement pour certains 
                      types de travaux.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-[#F5E6D3]/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Comment Obtenir Ces Aides ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#2D5D2E]">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Consulter un conseiller</h3>
                <p className="text-gray-600">
                  Contactez un conseiller France Rénov' pour un accompagnement personnalisé
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#2D5D2E]">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Audit énergétique</h3>
                <p className="text-gray-600">
                  Faites réaliser un audit énergétique de votre logement
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#2D5D2E]">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Demande d'aides</h3>
                <p className="text-gray-600">
                  Déposez votre demande en ligne avant le début des travaux
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#2D5D2E]">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Réalisation</h3>
                <p className="text-gray-600">
                  Faites réaliser vos travaux par des professionnels certifiés RGE
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg">
              Vous souhaitez en savoir plus sur les aides disponibles pour votre projet ?
            </p>
            <Button asChild size="lg" className="gap-2 font-medium bg-[#2D5D2E] hover:bg-[#234823] text-white">
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default FinancialAid;