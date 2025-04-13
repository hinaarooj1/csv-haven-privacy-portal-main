
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Star, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type TestimonialFormValues = {
  name: string;
  message: string;
  rating: number;
};

const TestimonialForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<TestimonialFormValues>({
    defaultValues: {
      name: '',
      message: '',
      rating: 0,
    },
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: TestimonialFormValues) => {
    console.log({ ...data, rating, photo });
    setIsSubmitted(true);
    form.reset();
    setRating(0);
    setPhoto(null);
  };

  if (isSubmitted) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <h3 className="text-xl font-medium text-green-800 mb-2">Merci pour votre témoignage !</h3>
        <p className="text-green-700">
          Votre avis est important pour nous et sera affiché sur notre site après modération.
        </p>
        <Button 
          className="mt-4 bg-[#2D5D2E] hover:bg-[#234823]" 
          onClick={() => setIsSubmitted(false)}
        >
          Ajouter un autre témoignage
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-[#F5E6D3]/30">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Partagez votre expérience</h3>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre nom</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div>
            <FormLabel>Note</FormLabel>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer ${
                    star <= (hoveredRating || rating) 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-gray-300'
                  }`}
                  onClick={() => {
                    setRating(star);
                    form.setValue('rating', star);
                  }}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                />
              ))}
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Partagez votre expérience avec notre service..."
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div>
            <FormLabel htmlFor="photo" className="block mb-2">
              Ajouter une photo (optionnel)
            </FormLabel>
            <div className="flex items-center gap-4">
              <label htmlFor="photo" className="cursor-pointer">
                <div className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-50">
                  <Upload className="h-5 w-5 text-gray-600" />
                  <span>Choisir une image</span>
                </div>
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
              
              {photo && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border cursor-pointer">
                      <img 
                        src={photo} 
                        alt="Aperçu" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Aperçu de l'image</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <img 
                        src={photo} 
                        alt="Aperçu en grand format" 
                        className="max-h-[60vh] w-auto mx-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="bg-[#2D5D2E] hover:bg-[#234823] w-full md:w-auto"
            disabled={rating === 0}
          >
            Soumettre votre témoignage
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default TestimonialForm;
