import React from 'react';
import { FileText, Leaf, Info, CheckCircle, Award, ChevronRight, Star, Home, Sun, Shield, ArrowRight, BadgePercent, Paintbrush } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OurSolution = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Inspired by Eurohabitat's clean hero with overlaid text */}
        <div className="relative bg-[#2D5D2E] text-white">
          <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: "url('/lovable-uploads/3525be4b-ca17-4840-942b-38bcce397202.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
          <div className="container mx-auto max-w-6xl py-24 px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Solutions d'Isolation & Peinture</h1>
              <p className="text-xl mb-8">
                Des solutions performantes et écologiques pour votre confort et pour réduire vos factures d'énergie jusqu'à 30%
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteRequestForm triggerButton={<Button className="bg-white text-[#2D5D2E] hover:bg-[#F5E6D3] hover:text-[#2D5D2E] text-lg px-6 py-6 rounded-md flex items-center">
                    Demander un devis gratuit
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators - Similar to Eurohabitat's trust badges */}
        <div className="bg-white py-8 border-b border-gray-100">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] rounded-full p-4 mb-3">
                  <CheckCircle className="h-6 w-6 text-[#2D5D2E]" />
                </div>
                <span className="text-sm font-medium">Entreprise certifiée RGE</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] rounded-full p-4 mb-3">
                  <BadgePercent className="h-6 w-6 text-[#2D5D2E]" />
                </div>
                <span className="text-sm font-medium">Aides financières jusqu'à 90%</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] rounded-full p-4 mb-3">
                  <Shield className="h-6 w-6 text-[#2D5D2E]" />
                </div>
                <span className="text-sm font-medium">Garantie décennale</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E6D3] rounded-full p-4 mb-3">
                  <Star className="h-6 w-6 text-[#2D5D2E]" />
                </div>
                <span className="text-sm font-medium">Plus de 1000 clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Solution Tabs - New section with tabs for different solutions */}
        <div className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-10">Nos Solutions pour votre Habitat</h2>
            
            <Tabs defaultValue="rampants" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto mb-8">
                <TabsTrigger value="rampants" className="py-3">Isolation des Rampants</TabsTrigger>
                <TabsTrigger value="exterieur" className="py-3">Isolation Extérieure</TabsTrigger>
                <TabsTrigger value="interieur" className="py-3">Isolation Intérieure</TabsTrigger>
                <TabsTrigger value="peinture" className="py-3">Peinture</TabsTrigger>
              </TabsList>
              
              {/* Isolation des Rampants Tab */}
              <TabsContent value="rampants">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce que l'isolation des rampants ?</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      L'isolation des rampants consiste à isoler la toiture en pente directement sous les tuiles. 
                      Cette technique est particulièrement efficace pour transformer vos combles en espace habitable 
                      tout en optimisant significativement l'efficacité énergétique de votre logement.
                    </p>
                    <div className="bg-[#F5E6D3]/30 p-6 rounded-lg shadow-sm border border-[#F5E6D3]">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="h-6 w-6 text-[#2D5D2E]" />
                        <h3 className="font-semibold text-xl">Le saviez-vous ?</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        30% des déperditions énergétiques d'une maison proviennent de la toiture ! Une isolation performante
                        peut vous faire économiser jusqu'à 30% sur votre facture de chauffage annuelle.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img src="/lovable-uploads/0c3067da-de55-4aa5-8fd1-3b3c638f6138.png" alt="Schéma d'isolation des rampants" className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                </div>
              </TabsContent>
              
              {/* Isolation Extérieure Tab */}
              <TabsContent value="exterieur">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Isolation Thermique par l'Extérieur (ITE)</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      L'isolation thermique par l'extérieur consiste à envelopper votre maison d'un manteau isolant. 
                      Cette technique permet d'éliminer les ponts thermiques, d'améliorer l'inertie thermique des murs 
                      et de ne pas réduire la surface habitable de votre logement.
                    </p>
                    <div className="bg-[#F5E6D3]/30 p-6 rounded-lg shadow-sm border border-[#F5E6D3]">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="h-6 w-6 text-[#2D5D2E]" />
                        <h3 className="font-semibold text-xl">Le saviez-vous ?</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        L'isolation par l'extérieur peut augmenter la valeur de votre bien immobilier et vous permet de rénover 
                        l'aspect esthétique de votre façade en même temps !
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-col space-y-4">
                      <img src="/lovable-uploads/cf49d234-8022-4698-9e4e-f54b2403efc8.png" alt="Isolation thermique par l'extérieur - avant" className="w-full h-auto rounded-lg shadow-md" />
                      <img src="/lovable-uploads/74381970-a74c-41a6-9021-3af59772360e.png" alt="Isolation thermique par l'extérieur - après" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Isolation Intérieure Tab */}
              <TabsContent value="interieur">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Isolation Thermique par l'Intérieur (ITI)</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      L'isolation par l'intérieur est la méthode la plus courante et la plus économique pour isoler 
                      une habitation existante. Cette solution est idéale lorsque la façade extérieure ne peut pas être 
                      modifiée (bâtiments historiques, contraintes urbanistiques...).
                    </p>
                    <div className="bg-[#F5E6D3]/30 p-6 rounded-lg shadow-sm border border-[#F5E6D3]">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="h-6 w-6 text-[#2D5D2E]" />
                        <h3 className="font-semibold text-xl">Le saviez-vous ?</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        L'isolation intérieure peut être réalisée pièce par pièce, ce qui permet d'étaler les travaux 
                        et de répartir l'investissement dans le temps.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      <img src="/lovable-uploads/423982a3-71b0-48a4-b328-9a95b10e56f6.png" alt="Isolation thermique par l'intérieur - travaux" className="w-full h-auto rounded-lg shadow-md" />
                      <img src="/lovable-uploads/237f408f-edb7-4fc1-b085-4e385277d61b.png" alt="Isolation thermique par l'intérieur - en cours" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Peinture Tab */}
              <TabsContent value="peinture">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Services de Peinture Professionnelle</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      Notre équipe de peintres professionnels réalise tous vos travaux de peinture intérieure 
                      et extérieure avec des produits de qualité et respectueux de l'environnement. Une finition 
                      parfaite qui valorise votre habitation et prolonge la durabilité de vos murs.
                    </p>
                    <div className="bg-[#F5E6D3]/30 p-6 rounded-lg shadow-sm border border-[#F5E6D3]">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="h-6 w-6 text-[#2D5D2E]" />
                        <h3 className="font-semibold text-xl">Le saviez-vous ?</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Nous utilisons des peintures écologiques à faible teneur en COV (Composés Organiques Volatils) 
                        pour préserver la qualité de l'air intérieur de votre logement.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      <img src="/lovable-uploads/31700953-33b1-4d67-a4bf-3124e34b8d51.png" alt="Services de peinture professionnelle" className="w-full h-auto rounded-lg shadow-md" />
                      <img src="/lovable-uploads/f3acec48-a4ad-4772-9bd2-af3e04705433.png" alt="Travaux de peinture en cours" className="w-full h-auto rounded-lg shadow-md" />
                      <img src="/lovable-uploads/ea687315-fa38-45e5-9155-94c9f604a9e7.png" alt="Équipement de peinture" className="w-full col-span-2 h-auto rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Process Steps - Inspired by Eurohabitat's process section */}
        <div className="py-16 px-4 bg-[#F5E6D3]/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6">Notre processus d'intervention</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Une approche simple et efficace pour vous garantir une isolation de qualité, réalisée dans les règles de l'art</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-5 -left-5 bg-[#2D5D2E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                <Home className="h-10 w-10 text-[#2D5D2E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Visite technique gratuite</h3>
                <p className="text-gray-600">
                  Un expert se déplace chez vous pour évaluer votre logement et déterminer les solutions les plus adaptées à vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-5 -left-5 bg-[#2D5D2E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                <FileText className="h-10 w-10 text-[#2D5D2E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Devis détaillé</h3>
                <p className="text-gray-600">
                  Nous vous remettons un devis personnalisé et transparent, incluant toutes les aides financières dont vous pouvez bénéficier.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-5 -left-5 bg-[#2D5D2E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                <Sun className="h-10 w-10 text-[#2D5D2E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Réalisation des travaux</h3>
                <p className="text-gray-600">
                  Nos équipes qualifiées réalisent vos travaux dans le respect des normes en vigueur, avec un soin particulier pour la propreté et la qualité.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section - Using Eurohabitat's card layout */}
        <div className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6">Les avantages de notre solution</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Une isolation performante qui combine économies d'énergie, confort thermique et respect de l'environnement</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#2D5D2E] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Matériaux écologiques</h3>
                <p className="text-gray-600">
                  Nous utilisons des matériaux biosourcés et recyclables qui respectent l'environnement tout en assurant une isolation optimale.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#2D5D2E] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance énergétique</h3>
                <p className="text-gray-600">
                  Réduisez vos factures d'énergie jusqu'à 30% grâce à une isolation performante qui limite les déperditions de chaleur.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#2D5D2E] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualité certifiée</h3>
                <p className="text-gray-600">
                  Notre solution est certifiée par des organismes indépendants et respecte toutes les normes en vigueur.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Before/After Section - Similar to Eurohabitat's comparison section */}
        <div className="bg-[#F5E6D3]/30 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6">Avant / Après</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Découvrez la transformation apportée par nos solutions d'isolation et de peinture</p>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4 bg-gray-200 text-center font-bold text-gray-700">AVANT</div>
                <img src="/lovable-uploads/423982a3-71b0-48a4-b328-9a95b10e56f6.png" alt="Intérieur avant rénovation" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start text-red-500"><span className="mr-2 mt-1">✖</span> Déperditions de chaleur importantes</li>
                    <li className="flex items-start text-red-500"><span className="mr-2 mt-1">✖</span> Factures énergétiques élevées</li>
                    <li className="flex items-start text-red-500"><span className="mr-2 mt-1">✖</span> Inconfort thermique (chaud l'été, froid l'hiver)</li>
                    <li className="flex items-start text-red-500"><span className="mr-2 mt-1">✖</span> Humidité et risques de condensation</li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4 bg-[#2D5D2E] text-white text-center font-bold">APRÈS</div>
                <img src="/lovable-uploads/cf49d234-8022-4698-9e4e-f54b2403efc8.png" alt="Intérieur après rénovation" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start text-green-600"><span className="mr-2 mt-1">✓</span> Isolation performante avec un excellent coefficient R</li>
                    <li className="flex items-start text-green-600"><span className="mr-2 mt-1">✓</span> Économies d'énergie jusqu'à 30% sur vos factures</li>
                    <li className="flex items-start text-green-600"><span className="mr-2 mt-1">✓</span> Confort thermique optimal toute l'année</li>
                    <li className="flex items-start text-green-600"><span className="mr-2 mt-1">✓</span> Valorisation de votre patrimoine immobilier</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action - Inspired by Eurohabitat's clear CTAs */}
        <div className="bg-[#2D5D2E] text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à améliorer l'efficacité énergétique de votre toiture ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour bénéficier d'un diagnostic gratuit 
              et découvrir comment notre solution peut transformer votre habitat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteRequestForm triggerButton={<Button className="bg-white text-[#2D5D2E] hover:bg-[#F5E6D3] hover:text-[#2D5D2E] text-lg px-6 py-6 rounded-md">
                  Demander un devis
                </Button>} />
              
            </div>
            <p className="mt-6 text-white/80">
              Éligible aux aides de l'État - MaPrimeRénov' et CEE
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default OurSolution;
