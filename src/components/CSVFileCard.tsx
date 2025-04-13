
import React from 'react';
import { FileDown, FileText, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CSVFileCardProps {
  title: string;
  description: string;
  fileSize: string;
  lastUpdated: string;
  downloadUrl: string;
  imageUrl?: string;
}

const CSVFileCard: React.FC<CSVFileCardProps> = ({ 
  title, 
  description, 
  fileSize, 
  lastUpdated, 
  downloadUrl,
  imageUrl
}) => {
  return (
    <Card className="h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-40 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${title} preview`} 
            className="w-full h-full object-cover border-b border-gray-200"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            {title}
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Plus d'informations</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dernière mise à jour: {lastUpdated}</p>
                <p>Taille du fichier: {fileSize}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">{fileSize}</span>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <FileDown className="h-4 w-4" />
          Télécharger
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CSVFileCard;
