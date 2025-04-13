
import React, { useState } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard, { Testimonial } from '@/components/TestimonialCard';
import TestimonialForm from '@/components/TestimonialForm';
import { Button } from '@/components/ui/button';
import QuoteRequestForm from '@/components/QuoteRequestForm';

// Données d'exemple pour les témoignages
const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jean Dupont',
    date: '15 mai 2023',
    rating: 5,
    comment: 'Excellent travail d\'isolation des combles. Équipe professionnelle et efficace. Je recommande vivement Cameleon Renov !',
    initials: 'JD',
  },
  {
    id: 2,
    name: 'Marie Lefevre',
    date: '3 avril 2023',
    rating: 5,
    comment: 'Très satisfaite de l\'isolation extérieure. Travail soigné et propreté irréprochable. Merci pour votre professionnalisme !',
    initials: 'ML',
  },
  {
    id: 3,
    name: 'Thomas Bernard',
    date: '28 février 2023',
    rating: 4,
    comment: 'Bon rapport qualité-prix pour l\'isolation des murs. Équipe à l\'écoute et réactive face aux demandes spécifiques.',
    initials: 'TB',
  },
  {
    id: 4,
    name: 'Sophie Martin',
    date: '10 janvier 2023',
    rating: 5,
    comment: 'Travail impeccable pour l\'isolation de ma toiture. Économies d\'énergie considérables dès le premier mois. Merci !',
    avatar: '/lovable-uploads/7e003473-4799-426d-93be-7bc5f4412c7f.png',
    initials: 'SM',
  },
];

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [showWhyReview, setShowWhyReview] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nos solutions d'isolation
            </p>
          </div>
          
          <div className="bg-[#F5E6D3]/30 p-6 rounded-lg text-center mb-12">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <span className="font-medium">Ils nous font confiance :</span>
              <span className="font-semibold text-[#2D5D2E]">200+ clients</span>
              <span className="mx-2">•</span>
              <span className="font-semibold text-[#2D5D2E]">94% de recommandation</span>
            </div>
          </div>
          
          {/* Pourquoi nous laisser un avis ? */}
          <div className="mb-12">
            <button 
              className="w-full bg-[#2D5D2E] text-white p-4 rounded-lg flex justify-between items-center mb-2"
              onClick={() => setShowWhyReview(!showWhyReview)}
            >
              <span className="text-xl font-medium">Pourquoi Laisser Un Avis ?</span>
              <ChevronRight className={`h-6 w-6 transition-transform duration-300 ${showWhyReview ? 'rotate-90' : ''}`} />
            </button>
            
            {showWhyReview && (
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Votre avis est précieux pour nous aider à améliorer nos services et à guider d'autres clients 
                  dans leur choix. En partageant votre expérience, vous contribuez à la transparence et à la qualité 
                  de nos prestations d'isolation.
                </p>
              </div>
            )}
          </div>
          
          {/* Comment déposer votre avis */}
          <div className="mb-12">
            <button 
              className="w-full bg-[#2D5D2E] text-white p-4 rounded-lg flex justify-between items-center mb-2"
              onClick={() => setShowForm(!showForm)}
            >
              <span className="text-xl font-medium">Comment Déposer Votre Avis ?</span>
              <ChevronRight className={`h-6 w-6 transition-transform duration-300 ${showForm ? 'rotate-90' : ''}`} />
            </button>
            
            {showForm && (
              <div className="mt-6">
                <TestimonialForm />
              </div>
            )}
          </div>
          
          {/* Affichage des témoignages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Ce que disent nos clients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Appel à l'action */}
          <div className="text-center mt-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à partager votre expérience ?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-[#2D5D2E] hover:bg-[#234823] px-8"
                onClick={() => {
                  setShowForm(true);
                  window.scrollTo({
                    top: document.querySelector('.min-h-screen')?.scrollHeight || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                Laisser un témoignage
              </Button>
              
              <QuoteRequestForm 
                triggerButton={
                  <Button className="gap-2 bg-[#2D5D2E] hover:bg-[#234823] text-white">
                    Demander un Devis Gratuit
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
