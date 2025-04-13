
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocationMap from '@/components/LocationMap';

const AgencyInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre agence principale</h2>
      
      <LocationMap
        latitude={47.9351}
        longitude={1.8963}
        address="7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS"
        agencyName="Cameleon Renovation"
      />
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-8">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-[#2D5D2E]" />
          <h3 className="font-semibold">Nos agences en France</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Nos équipes sont présentes partout en France pour vous accompagner dans vos projets d'isolation.
        </p>
        <Button className="w-full bg-[#2D5D2E] hover:bg-[#234823] text-white">
          Trouver l'agence la plus proche
        </Button>
      </div>
    </div>
  );
};

export default AgencyInfo;
