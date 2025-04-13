
import React, { useState, useEffect } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

type FormValues = z.infer<typeof formSchema>;

// Correct EmailJS configuration with PUBLIC_KEY
const EMAILJS_SERVICE_ID = "service_udo3a7q";
const EMAILJS_TEMPLATE_ID = "template_9txr8vt";
const EMAILJS_USER_ID = "w_yfoShgtLWriIvB9";

// Use same IDs for fallback as we're debugging
const EMAILJS_FALLBACK_SERVICE_ID = "service_udo3a7q";
const EMAILJS_FALLBACK_TEMPLATE_ID = "template_9txr8vt";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      message: "",
    },
  });

  async function sendWithFallback(params: any) {
    try {
      console.log("Tentative d'envoi principal avec:", EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID);
      // Add debug logs
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        params,
        EMAILJS_USER_ID // Add the user ID as the 4th parameter
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
          EMAILJS_USER_ID // Add the user ID as the 4th parameter
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
      from_phone: data.phone || "Non spécifié",
      message: data.message,
      to_name: "Cameleon Renov",
    };
    
    console.log("Envoi du formulaire:", templateParams);
    
    try {
      const success = await sendWithFallback(templateParams);
      
      if (success) {
        console.log("Email envoyé avec succès!");
        toast({
          title: "Message envoyé",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
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

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de contact</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input placeholder="Jean Dupont" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input placeholder="exemple@email.com" className="pl-10" {...field} />
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
                  <FormLabel>Téléphone (facultatif)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input placeholder="06 12 34 56 78" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Textarea 
                        placeholder="Décrivez votre projet ou votre demande..." 
                        className="pl-10 min-h-[120px]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#2D5D2E] hover:bg-[#234823] text-white"
            >
              {isSubmitting ? "Envoi en cours..." : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer mon message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
