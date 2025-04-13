
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <div className="flex items-center gap-3">
        <div className="bg-[#F5E6D3] p-2 rounded-full">
          <Phone className="h-5 w-5 text-[#2D5D2E]" />
        </div>
        <div>
          <p className="font-medium">Par téléphone</p>
          <p className="text-gray-600">02 45 48 33 96</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-[#F5E6D3] p-2 rounded-full">
          <Mail className="h-5 w-5 text-[#2D5D2E]" />
        </div>
        <div>
          <p className="font-medium">Par email</p>
          <p className="text-gray-600">contact@cameleon-renov.fr</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-[#F5E6D3] p-2 rounded-full">
          <MapPin className="h-5 w-5 text-[#2D5D2E]" />
        </div>
        <div>
          <p className="font-medium">Notre adresse</p>
          <p className="text-gray-600">7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
