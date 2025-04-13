
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

export type Testimonial = {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
  initials: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="p-6 h-full flex flex-col bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex gap-4 items-center mb-4">
        <Avatar className="h-12 w-12 border border-gray-200">
          {testimonial.avatar ? (
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          ) : (
            <AvatarFallback className="bg-[#2D5D2E]/10 text-[#2D5D2E] font-medium">
              {testimonial.initials}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div>
          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < testimonial.rating
                ? 'text-yellow-500 fill-yellow-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow">{testimonial.comment}</p>
    </Card>
  );
};

export default TestimonialCard;
