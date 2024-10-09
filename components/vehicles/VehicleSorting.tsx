"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function VehicleSorting() {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Ici, vous appelleriez une fonction pour trier les véhicules
    console.log('Tri par:', value);
  };

  return (
    <div className="mb-4">
      <Select onValueChange={handleSortChange} value={sortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price-asc">Prix croissant</SelectItem>
          <SelectItem value="price-desc">Prix décroissant</SelectItem>
          <SelectItem value="year-desc">Année récente</SelectItem>
          <SelectItem value="year-asc">Année ancienne</SelectItem>
          <SelectItem value="mileage-asc">Kilométrage bas</SelectItem>
          <SelectItem value="mileage-desc">Kilométrage élevé</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}