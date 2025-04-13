
import React, { useState } from 'react';
import { File, Shield, ScrollText, FileText, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const CGV = () => {
  const lastUpdated = "1 juin 2023";
  const [showMediationInfo, setShowMediationInfo] = useState(false);
  
  const toggleMediationInfo = (e) => {
    e.preventDefault();
    setShowMediationInfo(!showMediationInfo);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="h-8 w-8 text-[#2D5D2E]" />
            <h1 className="text-3xl font-bold text-gray-900">Conditions Générales de Vente</h1>
          </div>
          
          <p className="text-gray-500 mb-6">Dernière mise à jour : {lastUpdated}</p>
          
          <div className="space-y-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">1. Préambule</h2>
              <p className="text-gray-600 mb-4">
                Les présentes conditions générales de vente (ci-après "CGV") régissent les relations contractuelles 
                entre la société Cameleon Renov, EURL au capital de 18000€, immatriculée au RCS de Orléans 
                sous le numéro 123 456 789, dont le siège social est situé au 7 RUE DES PERVENCHES, 45400 FLEURY-LES-AUBRAIS, 
                France (ci-après "Cameleon Renov") et toute personne physique ou morale souhaitant bénéficier 
                des services d'isolation proposés par Cameleon Renov (ci-après le "Client").
              </p>
              <p className="text-gray-600 mb-4">
                Toute commande passée auprès de Cameleon Renov implique l'acceptation pleine et entière des 
                présentes CGV. Ces CGV prévalent sur tout autre document du Client, sauf dérogation expresse et 
                écrite de Cameleon Renov.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">2. Services proposés</h2>
              <p className="text-gray-600 mb-4">
                Cameleon Renov propose des services d'isolation thermique, notamment l'isolation des combles, 
                des murs, des planchers, et toute autre prestation liée à l'isolation thermique des bâtiments.
              </p>
              <p className="text-gray-600 mb-4">
                Les services sont détaillés dans le devis fourni au Client. Ce devis est établi sur la base des 
                informations communiquées par le Client et après visite technique du bâtiment à isoler.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">3. Devis et commande</h2>
              <p className="text-gray-600 mb-4">
                Les devis sont gratuits et valables pour une durée de 3 mois à compter de leur date d'émission. 
                La commande n'est définitive qu'après acceptation expresse du devis par le Client et versement 
                de l'acompte prévu dans les conditions particulières du devis.
              </p>
              <p className="text-gray-600 mb-4">
                Le Client s'engage à fournir à Cameleon Renov des informations exactes et complètes concernant 
                le bâtiment à isoler. Toute modification des caractéristiques du chantier après acceptation du devis 
                pourra donner lieu à une facturation complémentaire.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">4. Prix et modalités de paiement</h2>
              <p className="text-gray-600 mb-4">
                Les prix indiqués dans le devis sont en euros et hors taxes. La TVA applicable est celle en vigueur 
                au jour de la facturation. Les prix tiennent compte des aides financières et dispositifs d'incitation 
                fiscale en vigueur au jour de l'établissement du devis.
              </p>
              <p className="text-gray-600 mb-4">
                Un acompte de 30% du montant total est exigé à la commande. Le solde est payable selon les modalités 
                suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>40% à la date de commencement des travaux</li>
                <li>30% à la réception des travaux</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Tout retard de paiement entraînera l'application d'une pénalité de retard égale à trois fois le taux 
                d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">5. Délais d'exécution</h2>
              <p className="text-gray-600 mb-4">
                Les délais d'exécution sont donnés à titre indicatif dans le devis. Cameleon Renov s'efforce de 
                respecter ces délais, mais ne saurait être tenue responsable des retards liés à des circonstances 
                indépendantes de sa volonté (conditions météorologiques défavorables, retards d'approvisionnement, etc.).
              </p>
              <p className="text-gray-600 mb-4">
                En cas de retard prévisible, Cameleon Renov s'engage à en informer le Client dans les meilleurs délais.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">6. Réception des travaux</h2>
              <p className="text-gray-600 mb-4">
                La réception des travaux est formalisée par un procès-verbal signé par le Client et Cameleon Renov. 
                Ce procès-verbal constate l'achèvement des travaux et leur conformité avec le devis. Le Client dispose 
                d'un délai de 7 jours à compter de la réception pour notifier par écrit à Cameleon Renov les éventuelles 
                réserves.
              </p>
              <p className="text-gray-600 mb-4">
                À défaut de réserves notifiées dans ce délai, les travaux sont réputés conformes et acceptés par le Client.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">7. Garanties</h2>
              <p className="text-gray-600 mb-4">
                Cameleon Renov est tenue des garanties légales de conformité et des vices cachés dans les conditions 
                prévues par la loi. Les travaux réalisés bénéficient également :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>De la garantie de parfait achèvement d'un an</li>
                <li>De la garantie biennale de bon fonctionnement des éléments d'équipement</li>
                <li>De la garantie décennale pour les travaux relevant de cette garantie</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Ces garanties prennent effet à compter de la réception des travaux sans réserve ou de la levée des réserves.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">8. Droit de rétractation</h2>
              <p className="text-gray-600 mb-4">
                Conformément aux dispositions du Code de la consommation, le Client consommateur dispose d'un délai de 
                14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier 
                de motifs ni à payer de pénalités.
              </p>
              <p className="text-gray-600 mb-4">
                Pour exercer ce droit, le Client doit notifier sa décision de rétractation par écrit à Cameleon Renov. 
                Un formulaire de rétractation est disponible sur demande.
              </p>
              <p className="text-gray-600 mb-4">
                Si le Client a demandé expressément le commencement des travaux avant la fin du délai de rétractation, il 
                devra verser à Cameleon Renov un montant correspondant au service fourni jusqu'à la communication de 
                sa décision de rétractation.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">9. Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                Tous les éléments (textes, logos, images, éléments graphiques, etc.) constituant les documents commerciaux 
                et techniques de Cameleon Renov sont protégés par des droits de propriété intellectuelle. Toute 
                reproduction ou représentation, totale ou partielle, est strictement interdite sans l'autorisation expresse 
                de Cameleon Renov.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">10. Protection des données personnelles</h2>
              <p className="text-gray-600 mb-4">
                Les données personnelles collectées par Cameleon Renov sont nécessaires à la gestion des commandes et 
                aux relations commerciales. Elles sont traitées conformément à la réglementation en vigueur, notamment le 
                Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016.
              </p>
              <p className="text-gray-600 mb-4">
                Le Client dispose d'un droit d'accès, de rectification, d'opposition et de suppression des données le 
                concernant. Pour exercer ces droits, le Client peut contacter Cameleon Renov à l'adresse suivante : 
                rgpd@cameleon-renov.fr.
              </p>
              <p className="text-gray-600 mb-4">
                Pour plus d'informations, veuillez consulter notre Politique de Confidentialité disponible sur notre site internet.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">11. Litiges et médiation</h2>
              <p className="text-gray-600 mb-4">
                Tout litige relatif aux présentes conditions générales de vente relève de la compétence des tribunaux français.
              </p>
              <p className="text-gray-600 mb-4">
                Conformément aux dispositions des articles L.616-1 et R.616-1 du code de la consommation, tout consommateur 
                a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige 
                qui l'oppose à un professionnel.
              </p>
              <p className="text-gray-600 mb-4">
                En cas de litige, vous pouvez recourir au <a href="#" onClick={toggleMediationInfo} className="text-[#2D5D2E] hover:underline font-medium">médiateur de la consommation</a>.
              </p>
              
              {showMediationInfo && (
                <div className="bg-[#F5E6D3] p-4 rounded-lg mb-4">
                  <p className="text-gray-600">
                    En cas de litige, vous pouvez recourir au médiateur de la consommation CNPM Médiation Consommation :
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mt-2">
                    <li>
                      Site internet : <a href="https://cnpm-mediation-consommation.eu/" target="_blank" rel="noopener noreferrer" className="text-[#2D5D2E] hover:underline">https://cnpm-mediation-consommation.eu/</a>
                    </li>
                    <li>
                      Adresse postale : CNPM Médiation Consommation – 27 avenue de la Libération, 42400 Saint-Chamond
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Cette procédure s'inscrit dans le cadre des articles L.616-1 et R.616-1 du code de la consommation.
                  </p>
                </div>
              )}
              
              <p className="text-gray-600 mb-4">
                Le consommateur peut saisir le médiateur dans un délai maximal d'un an à compter de la réclamation écrite adressée 
                au professionnel. Le médiateur, dont les coordonnées ont été communiquées ci-dessus, peut être saisi pour 
                tout litige de consommation dont le règlement n'aurait pas abouti.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">12. Droit applicable et juridiction compétente</h2>
              <p className="text-gray-600 mb-4">
                Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée 
                avant toute action judiciaire. À défaut d'accord amiable, les tribunaux de Orléans seront seuls compétents, 
                sauf dispositions d'ordre public contraires.
              </p>
              <p className="text-gray-600 mb-4">
                Pour les Clients consommateurs, ces dispositions ne font pas obstacle à l'application des dispositions 
                impératives protectrices du consommateur prévues par le droit français.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CGV;
