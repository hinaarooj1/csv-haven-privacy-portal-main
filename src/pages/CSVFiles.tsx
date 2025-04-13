
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CSVFileCard from '@/components/CSVFileCard';

const CSVFiles = () => {
  const csvFiles = [{
    id: 1,
    title: "Données Utilisateurs",
    description: "Fichier CSV contenant les données anonymisées des utilisateurs avec identifiants uniques et préférences.",
    fileSize: "2.4 MB",
    lastUpdated: "15/06/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1581091140834-9006e44aa946?q=80&w=500&auto=format&fit=crop"
  }, {
    id: 2,
    title: "Transactions",
    description: "Enregistrements des transactions avec horodatage, montants et identifiants de référence.",
    fileSize: "4.8 MB",
    lastUpdated: "03/07/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop"
  }, {
    id: 3,
    title: "Produits",
    description: "Catalogue complet des produits avec codes SKU, descriptions et informations tarifaires.",
    fileSize: "1.2 MB",
    lastUpdated: "28/05/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1593398603653-c95618bf101b?q=80&w=500&auto=format&fit=crop"
  }, {
    id: 4,
    title: "Statistiques Analytics",
    description: "Données d'analyse du trafic web, incluant pages vues, taux de rebond et temps passé.",
    fileSize: "3.5 MB",
    lastUpdated: "10/07/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?q=80&w=500&auto=format&fit=crop"
  }, {
    id: 5,
    title: "Inventaire",
    description: "État actuel de l'inventaire avec niveaux de stock, emplacements et dates de réapprovisionnement.",
    fileSize: "2.1 MB",
    lastUpdated: "12/07/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1595514535215-49aab473a80d?q=80&w=500&auto=format&fit=crop"
  }, {
    id: 6,
    title: "Journaux d'Activité",
    description: "Journaux d'activité du système enregistrant les actions des utilisateurs et les événements du système.",
    fileSize: "5.7 MB",
    lastUpdated: "14/07/2023",
    downloadUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500&auto=format&fit=crop"
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {csvFiles.map(file => <CSVFileCard key={file.id} title={file.title} description={file.description} fileSize={file.fileSize} lastUpdated={file.lastUpdated} downloadUrl={file.downloadUrl} imageUrl={file.imageUrl} />)}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Charger plus de fichiers</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};

export default CSVFiles;
