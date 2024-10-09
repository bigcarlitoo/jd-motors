import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ServiceRequestForm from '@/components/services/ServiceRequestForm';

export default function Services() {
  const services = [
    {
      title: "Vente de véhicules d'occasion",
      description: "Large sélection de véhicules d'occasion de qualité, inspectés et garantis.",
      link: "/vehicules",
    },
    {
      title: "Achat de votre véhicule",
      description: "Nous rachetons votre véhicule au meilleur prix, quelle que soit sa marque ou son état.",
      link: "/contact",
    },
    {
      title: "Recherche personnalisée",
      description: "Nous trouvons le véhicule de vos rêves selon vos critères spécifiques.",
      link: "/contact",
    },
    {
      title: "Financement",
      description: "Solutions de financement adaptées à votre budget et à votre situation.",
      link: "/contact",
    },
    {
      title: "Garantie et service après-vente",
      description: "Garanties étendues et service après-vente de qualité pour votre tranquillité d'esprit.",
      link: "/contact",
    },
    {
      title: "Conseils d'experts",
      description: "Notre équipe d'experts est là pour vous guider dans votre choix de véhicule.",
      link: "/contact",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) =>(
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={service.link}>
                <Button className="w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Demande de Service</h2>
        <ServiceRequestForm />
      </div>
    </div>
  );
}