
import React, { useEffect, useState } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Délai court pour s'assurer que le DOM est complètement chargé
    const timer = setTimeout(() => {
      try {
        // Vérifier si l'utilisateur a déjà accepté les cookies
        const consentGiven = localStorage.getItem('cookieConsent');
        console.log('État du consentement des cookies:', consentGiven);
        
        // Afficher la bannière si aucun consentement n'est trouvé
        if (!consentGiven) {
          console.log('Aucun consentement trouvé, affichage de la bannière');
          setIsVisible(true);
        } else {
          console.log('Consentement déjà donné:', consentGiven);
        }
      } catch (error) {
        // En cas d'erreur avec localStorage, afficher la bannière par défaut
        console.error('Erreur lors de la vérification du consentement:', error);
        setIsVisible(true);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    try {
      console.log('Cookies acceptés');
      localStorage.setItem('cookieConsent', 'accepted');
      setIsVisible(false);
    } catch (error) {
      console.error('Erreur lors de l\'acceptation des cookies:', error);
    }
  };

  const declineCookies = () => {
    try {
      console.log('Cookies refusés');
      localStorage.setItem('cookieConsent', 'declined');
      setIsVisible(false);
    } catch (error) {
      console.error('Erreur lors du refus des cookies:', error);
    }
  };

  // Si la bannière n'est pas visible, ne rien rendre
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:flex md:items-center md:justify-between">
      <div className="flex items-start md:items-center space-x-3 mb-4 md:mb-0">
        <Cookie className="h-6 w-6 text-[#2D5D2E] flex-shrink-0" />
        <div>
          <p className="text-gray-700">
            Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, 
            vous acceptez notre utilisation des cookies.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Pour en savoir plus, consultez notre{' '}
            <Link to="/politique-de-confidentialite" className="text-[#2D5D2E] hover:underline">
              politique de confidentialité
            </Link>.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-4 md:mt-0 flex-shrink-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-[#2D5D2E] text-[#2D5D2E] hover:bg-[#2D5D2E]/10"
          onClick={declineCookies}
        >
          Refuser
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="bg-[#2D5D2E] hover:bg-[#2D5D2E]/90"
          onClick={acceptCookies}
        >
          Accepter
        </Button>
        <button 
          className="text-gray-500 hover:text-gray-700 focus:outline-none" 
          onClick={declineCookies}
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
