"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/vehicles/ContactForm';

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  description: string;
  history: string;
  images: string[];
};

export default function VehicleDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    // Simulating API call to fetch vehicle details
    const fetchVehicleDetails = async () => {
      // In a real application, this would be an API call using the id
      const mockVehicle: Vehicle = {
        id: Number(id),
        brand: 'Renault',
        model: 'Clio',
        year: 2020,
        price: 12000,
        mileage: 45000,
        fuel: 'Essence',
        transmission: 'Manuelle',
        description: 'Voiture en excellent état, entretenue régulièrement. Idéale pour la ville et les longs trajets.',
        history: "Un seul propriétaire, carnet d'entretien complet, révision récente.",
        images: [
          'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        ],
      };
      setVehicle(mockVehicle);
    };

    fetchVehicleDetails();
  }, [id]);

  if (!vehicle) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{`${vehicle.brand} ${vehicle.model} (${vehicle.year})`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              {vehicle.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-64 object-cover rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p>{vehicle.description}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Historique du véhicule</h2>
            <p>{vehicle.history}</p>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Détails du véhicule</CardTitle>
              <CardDescription>Informations techniques et prix</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><strong>Prix:</strong> {vehicle.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</li>
                <li><strong>Année:</strong> {vehicle.year}</li>
                <li><strong>Kilométrage:</strong> {vehicle.mileage.toLocaleString('fr-FR')} km</li>
                <li><strong>Carburant:</strong> {vehicle.fuel}</li>
                <li><strong>Transmission:</strong> {vehicle.transmission}</li>
              </ul>
              <Button className="w-full mt-4">Demander un essai</Button>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Contactez-nous</CardTitle>
              <CardDescription>Demandez plus d'informations sur ce véhicule</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm vehicleId={vehicle.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}