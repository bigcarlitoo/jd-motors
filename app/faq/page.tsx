"use client";

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';

const faqs = [
  {
    question: "Comment puis-je prendre rendez-vous pour essayer un véhicule ?",
    answer: "Vous pouvez prendre rendez-vous en nous appelant au 03 22 12 34 56 ou en utilisant le formulaire de contact sur notre site web. Nous vous contacterons rapidement pour confirmer votre rendez-vous."
  },
  {
    question: "Proposez-vous des garanties sur vos véhicules d'occasion ?",
    answer: "Oui, tous nos véhicules d'occasion sont couverts par une garantie minimale de 3 mois. Nous proposons également des extensions de garantie allant jusqu'à 24 mois pour votre tranquillité d'esprit."
  },
  {
    question: "Puis-je faire reprendre mon ancien véhicule ?",
    answer: "Absolument ! Nous proposons un service de reprise de votre ancien véhicule. Lors de votre visite, nous évaluerons votre véhicule et vous ferons une offre de reprise que vous pourrez déduire du prix de votre nouvel achat."
  },
  {
    question: "Quels sont les modes de financement disponibles ?",
    answer: "Nous offrons plusieurs options de financement, incluant le crédit classique et la location avec option d'achat (LOA). Nos conseillers financiers sont à votre disposition pour vous aider à trouver la solution la plus adaptée à votre situation."
  },
  {
    question: "Combien de temps dure le processus d'achat d'un véhicule ?",
    answer: "Le processus d'achat peut varier selon votre situation, mais en général, il peut être complété en 1 à 3 jours ouvrables. Cela inclut l'essai du véhicule, la finalisation du financement et la préparation des documents administratifs."
  },
  // Add more FAQs as needed
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Foire Aux Questions</h1>
      <div className="max-w-2xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Rechercher une question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}