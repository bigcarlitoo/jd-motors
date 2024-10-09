"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  imageUrl: string;
};

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 9;

  useEffect(() => {
    // Simulating API call to fetch vehicles
    const fetchVehicles = async () => {
      // In a real application, this would be an API call
      const mockVehicles: Vehicle[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        brand: ['Renault', 'Peugeot', 'Citroën', 'Volkswagen'][Math.floor(Math.random() * 4)],
        model: ['Clio', '208', 'C3', 'Golf'][Math.floor(Math.random() * 4)],
        year: 2018 + Math.floor(Math.random() * 5),
        price: 10000 + Math.floor(Math.random() * 10000),
        mileage: 10000 + Math.floor(Math.random() * 90000),
        imageUrl: `https://source.unsplash.com/featured/?car,${i}`,
      }));
      setVehicles(mockVehicles);
    };

    fetchVehicles();
  }, []);

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <CardHeader>
              <CardTitle>{`${vehicle.brand} ${vehicle.model}`}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={vehicle.imageUrl} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="text-lg font-semibold">{vehicle.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
              <p>{`Année: ${vehicle.year}`}</p>
              <p>{`Kilométrage: ${vehicle.mileage.toLocaleString('fr-FR')} km`}</p>
              <Link href={`/vehicules/${vehicle.id}`}>
                <Button className="mt-4 w-full">Voir les détails</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {Array.from({ length: Math.ceil(vehicles.length / vehiclesPerPage) }, (_, i) => (
          <Button
            key={i}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;