"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
};

const FeaturedVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    // Simulating API call to fetch featured vehicles
    const fetchVehicles = async () => {
      // In a real application, this would be an API call
      const mockVehicles: Vehicle[] = [
        { id: 1, brand: 'Renault', model: 'Clio', year: 2020, price: 12000, imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 2, brand: 'Peugeot', model: '208', year: 2021, price: 13500, imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 3, brand: 'Citroën', model: 'C3', year: 2019, price: 11000, imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      ];
      setVehicles(mockVehicles);
    };

    fetchVehicles();
  }, []);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Véhicules en Vedette</h2>
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <CarouselContent>
          {vehicles.map((vehicle) => (
            <CarouselItem key={vehicle.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{`${vehicle.brand} ${vehicle.model}`}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={vehicle.imageUrl} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-48 object-cover mb-4 rounded-md" />
                  <p className="text-lg font-semibold">{vehicle.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                  <p>{`Année: ${vehicle.year}`}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedVehicles;