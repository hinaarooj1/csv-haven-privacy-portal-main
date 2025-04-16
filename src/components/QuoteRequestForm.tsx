
import React, { useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FileText, Users, Home, Phone, Mail, Send, X } from 'lucide-react';
import emailjs from 'emailjs-com';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  address: z.string().min(5, "Adresse invalide"),
  projectType: z.string({
    required_error: "Veuillez sélectionner un type de projet",
  }).min(1, "Veuillez sélectionner un type de projet"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface QuoteRequestFormProps {
  triggerButton?: React.ReactNode;
}

// Correct EmailJS configuration
const EMAILJS_SERVICE_ID = "service_udo3a7q";
const EMAILJS_TEMPLATE_ID = "template_u4egfp8";  // Fix the template ID (was template_6wntvrtb)
const EMAILJS_USER_ID = "w_yfoShgtLWriIvB9";

// Use same IDs for fallback for debugging
const EMAILJS_FALLBACK_SERVICE_ID = "service_udo3a7q";
const EMAILJS_FALLBACK_TEMPLATE_ID = "template_u4egfp8";

const QuoteRequestForm = ({ triggerButton }: QuoteRequestFormProps) => {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  useEffect(() => {
    // Initialize EmailJS with the user ID
    emailjs.init(EMAILJS_USER_ID);
    console.log("EmailJS initialized with:", EMAILJS_USER_ID);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      message: "",
    },
  });

  // Function to send email with fallback option
  async function sendWithFallback(params: any) {
    try {
      console.log("Tentative d'envoi principal avec:", EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        params,
        EMAILJS_USER_ID  // Add the user ID as the 4th parameter
      );
      console.log("Envoi réussi:", response);
      return true;
    } catch (e) {
      console.warn("Fallback activé - Nouveau template", e);
      try {
        console.log("Tentative d'envoi fallback avec:", EMAILJS_FALLBACK_SERVICE_ID, EMAILJS_FALLBACK_TEMPLATE_ID);
        const response = await emailjs.send(
          EMAILJS_FALLBACK_SERVICE_ID, 
          EMAILJS_FALLBACK_TEMPLATE_ID, 
          params,
          EMAILJS_USER_ID  // Add the user ID as the 4th parameter
        );
        console.log("Envoi fallback réussi:", response);
        return true;
      } catch (error) {
        console.error("Échec de l'envoi même avec fallback:", error);
        return false;
      }
    }
  }
 
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      from_address: data.address,
      project_type: data.projectType,
      message: data.message || "Aucun message supplémentaire",
      to_name: "Cameleon Renov",
    };
    console.log('templateParams: ', templateParams);
    
    console.log("Demande de devis envoyée:", templateParams);
    
    try {
      const success = await sendWithFallback(templateParams);
      
      if (success) {
        console.log("Email envoyé avec succès!");
        toast({
          title: "Demande envoyée !",
          description: "Nous vous contacterons rapidement pour discuter de votre projet.",
        });
        setOpen(false);
        form.reset();
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const defaultTrigger = (
    <Button variant="outline" className="flex items-center gap-2 bg-[#2D5D2E] text-white hover:bg-[#234823] border-none">
      <FileText className="h-4 w-4" />
      Devis Gratuit
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileText className="h-5 w-5 text-[#2D5D2E]" />
            Demande de devis gratuit
          </DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour recevoir un devis personnalisé pour votre projet d'isolation.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input className="pl-10" placeholder="Jean Dupont" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input className="pl-10" placeholder="exemple@email.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input className="pl-10" placeholder="06 12 34 56 78" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse du projet</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Home className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input className="pl-10" placeholder="123 rue de la République, 75001 Paris" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de projet</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un type de projet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Isolation des rampants">Isolation des rampants</SelectItem>
                        <SelectItem value="Isolation des combles">Isolation des combles</SelectItem>
                        <SelectItem value="Isolation des murs">Isolation des murs</SelectItem>
                        <SelectItem value="Isolation du sol">Isolation du sol</SelectItem>
                        <SelectItem value="Autre projet">Autre projet</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Informations complémentaires (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Précisez vos attentes ou questions..."
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Alert className="bg-[#F5E6D3]/30 border-[#F5E6D3]">
              <AlertDescription className="text-sm text-gray-700">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour discuter de votre projet d'isolation.
              </AlertDescription>
            </Alert>

            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 mt-5">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)}
                className="w-full sm:w-auto order-2 sm:order-1 flex gap-2"
              >
                <X className="h-4 w-4" />
                Annuler
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto order-1 sm:order-2 bg-[#2D5D2E] hover:bg-[#234823] flex gap-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestForm;
