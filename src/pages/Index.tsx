
import React from 'react';
import { ArrowRight, Leaf, Clock, Coins, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import QuoteRequestForm from '@/components/QuoteRequestForm';

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F5E6D3]/50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Isolation des Rampants de Toit : Économique & Écologique</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Réduisez vos factures de chauffage jusqu'à 40% avec des matériaux 100% français.
                </p>
                <QuoteRequestForm 
                  triggerButton={
                    <Button size="lg" className="gap-2 font-medium bg-[#2D5D2E] hover:bg-[#234823] text-white">
                      Devis Gratuit en 48h
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  }
                />
                
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2D5D2E]" />
                    <span className="text-sm font-medium">Certifié RGE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2D5D2E]" />
                    <span className="text-sm font-medium">Aides financières</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2D5D2E]" />
                    <span className="text-sm font-medium">Fabriqué en France</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <img src="/lovable-uploads/d34193c8-1367-45c1-9575-fdb17c192ae5.png" alt="Travaux d'isolation d'une toiture" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nos Services d'Isolation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">Isolation des Rampants</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Isolez vos combles aménagés pour une efficacité énergétique optimale toute l'année.
                  </p>
                  <Link to="/isolation-rampants">
                    <Button variant="outline" className="w-full mt-2">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">Isolation Extérieure</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Une solution complète pour isoler votre maison par l'extérieur et embellir votre façade.
                  </p>
                  <Link to="/isolation-exterieure">
                    <Button variant="outline" className="w-full mt-2">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">Isolation Intérieure</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Améliorez le confort de votre habitat avec nos solutions d'isolation par l'intérieur.
                  </p>
                  <Link to="/isolation-interieure">
                    <Button variant="outline" className="w-full mt-2">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">Isolation Toiture</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Protégez votre maison contre les pertes de chaleur avec une isolation de toiture performante.
                  </p>
                  <Link to="/isolation-toiture">
                    <Button variant="outline" className="w-full mt-2">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">Services de Peinture</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Donnez une nouvelle vie à vos murs avec nos services de peinture professionnels.
                  </p>
                  <Link to="/peinture">
                    <Button variant="outline" className="w-full mt-2">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Étapes Simplissimes */}
        <section className="py-16 px-4 bg-[#F5E6D3]/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              En 4 étapes simplissimes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#F5E6D3] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2D5D2E]">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Votre situation</h3>
                <p className="text-gray-600">
                  Décrivez votre logement et vos besoins en isolation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F5E6D3] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2D5D2E]">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Type de logement</h3>
                <p className="text-gray-600">
                  Précisez les caractéristiques de votre habitat.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F5E6D3] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2D5D2E]">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Laissez-nous vos coordonnées pour vous recontacter.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F5E6D3] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2D5D2E]">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Devis personnalisé</h3>
                <p className="text-gray-600">
                  Recevez votre devis détaillé sous 48h.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Choisir Caméléon Rénovation */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pourquoi Choisir Caméléon Rénovation ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#F5E6D3] p-3 rounded-full mb-4">
                    <Leaf className="h-6 w-6 text-[#2D5D2E]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Écologique</h3>
                  <p className="text-gray-600">
                    Laine de bois française, bilan carbone optimal pour une isolation responsable.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#F5E6D3] p-3 rounded-full mb-4">
                    <Coins className="h-6 w-6 text-[#2D5D2E]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Économique</h3>
                  <p className="text-gray-600">
                    Jusqu'à 40% d'économies d'énergie sur vos factures de chauffage.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#F5E6D3] p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-[#2D5D2E]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rapide</h3>
                  <p className="text-gray-600">
                    Isolation sans gros travaux, devis en 48h et intervention rapide.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#F5E6D3]/30">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à Améliorer votre Confort ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Obtenez un devis gratuit pour l'isolation de votre maison et commencez à économiser dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <QuoteRequestForm 
                triggerButton={
                  <Button size="lg" className="gap-2 bg-[#2D5D2E] hover:bg-[#234823] text-white">
                    Demander un Devis Gratuit
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};

export default Index;
