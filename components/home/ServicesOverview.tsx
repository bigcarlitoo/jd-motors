import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  { title: "Vente de véhicules", description: "Large sélection de véhicules d'occasion de qualité" },
  { title: "Achat de votre véhicule", description: "Nous rachetons votre véhicule au meilleur prix" },
  { title: "Financement", description: "Solutions de financement adaptées à votre budget" },
];

export default function ServicesOverview() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <Link href="/services">
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}