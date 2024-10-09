"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const testimonials = [
  { id: 1, name: 'Jean Dupont', content: 'Excellent service ! J\'ai trouvé la voiture de mes rêves grâce à JD Motors 80.', rating: 5 },
  { id: 2, name: 'Marie Martin', content: 'Équipe très professionnelle et à l\'écoute. Je recommande vivement.', rating: 4 },
  { id: 3, name: 'Pierre Leroy', content: 'Processus d\'achat simple et transparent. Très satisfait de mon expérience.', rating: 5 },
  // Add more testimonials as needed
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  rating: z.number().min(1).max(5),
  content: z.string().min(10, { message: "Le témoignage doit contenir au moins 10 caractères." }),
});

export default function Testimonials() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rating: 5,
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send this data to your backend
    console.log(values);
    toast.success("Merci pour votre témoignage ! Il sera publié après modération.");
    setIsDialogOpen(false);
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Témoignages Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{testimonial.content}</p>
              <div className="mt-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-400">★</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Laisser un témoignage</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Votre témoignage</DialogTitle>
              <DialogDescription>
                Partagez votre expérience avec JD Motors 80. Votre témoignage sera publié après modération.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="5" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Témoignage</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Votre expérience avec JD Motors 80" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Envoyer</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}