"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import VehicleList from '@/components/vehicles/VehicleList';
import VehicleFilters from '@/components/vehicles/VehicleFilters';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch search results
    const fetchSearchResults = async () => {
      // In a real application, this would be an API call using the query
      const mockResults = [
        { id: 1, brand: 'Renault', model: 'Clio', year: 2020, price: 12000, mileage: 45000, imageUrl: 'https://example.com/clio.jpg' },
        { id: 2, brand: 'Peugeot', model: '208', year: 2019, price: 11000, mileage: 55000, imageUrl: 'https://example.com/208.jpg' },
        // Add more mock results as needed
      ];
      setSearchResults(mockResults);
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Résultats de recherche pour "{query}"</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <VehicleFilters />
        </aside>
        <main className="w-full md:w-3/4">
          <VehicleList vehicles={searchResults} />
        </main>
      </div>
    </div>
  );
}