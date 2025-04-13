import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  address: string;
  agencyName: string;
}

const MapContent = ({
  latitude,
  longitude,
  address,
  agencyName,
  apiKey
}: LocationMapProps & { apiKey: string }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
    
  });

  const center = { lat: latitude, lng: longitude };

  if (!isLoaded) return <p>Chargement de la carte...</p>;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '400px',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      center={center}
      zoom={15}
    >
      <Marker 
        position={center} 
        title={`${agencyName} - ${address}`} 
      />
    </GoogleMap>
  );
};

const LocationMap = ({
  latitude,
  longitude,
  address,
  agencyName
}: LocationMapProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isApiKeySaved, setIsApiKeySaved] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem('google-maps-token');
    console.log('savedKey: ', savedKey);
    if (savedKey) {
       
    }
  }, []);

  const handleSaveKey = () => {
    if (apiKey.trim()) { 
      localStorage.setItem('google-maps-token', apiKey);
      
      setApiKey(apiKey);
      setIsApiKeySaved(true);
    }
  };
  

  const handleResetKey = () => {
    localStorage.removeItem('google-maps-token');
    // setApiKey('');
    window.location.reload();
    // setIsApiKeySaved(false);
  };

  if (!isApiKeySaved) {
    return (
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-md">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Configuration de la carte</h3>
        <p className="text-sm text-amber-700 mb-4">
          Pour afficher la carte Google, veuillez entrer votre clé d'API Google Maps:
        </p>
        <ol className="list-decimal list-inside text-sm text-amber-700 mb-4 space-y-2">
          <li>Créez un compte Google Cloud Platform</li>
          <li>Activez l'API Google Maps JavaScript</li>
          <li>Générez une clé API publique</li>
          <li>Copiez la clé et collez-la ci-dessous</li>
        </ol>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Votre clé API Google Maps"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            onChange={e => setApiKey(e.target.value)}
            value={apiKey}
          />
          <button
            className="px-4 py-2 bg-[#2D5D2E] text-white rounded-md text-sm"
            onClick={handleSaveKey}
            disabled={!apiKey.trim()}
          >
            Enregistrer
          </button>
        </div>
      </div>
    );
  } 
  return (
    <div className="flex flex-col gap-4">
      <MapContent
        latitude={latitude}
        longitude={longitude}
        address={address}
        agencyName={agencyName}
        apiKey={apiKey}
      />
      <button
        className="mt-2 text-sm text-red-600 hover:underline"
        onClick={handleResetKey}
      >
        Réinitialiser la clé Google Maps
      </button>
    </div>
  );
};

export default LocationMap;
