"use client";

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const VehicleFilters = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the URL or call a function to fetch filtered results
    console.log({ brand, model, minYear, maxYear, minPrice, maxPrice, maxMileage });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="brand">Marque</Label>
        <Select onValueChange={setBrand} value={brand}>
          <SelectTrigger id="brand">
            <SelectValue placeholder="Sélectionnez une marque" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="renault">Renault</SelectItem>
            <SelectItem value="peugeot">Peugeot</SelectItem>
            <SelectItem value="citroen">Citroën</SelectItem>
            <SelectItem value="volkswagen">Volkswagen</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="model">Modèle</Label>
        <Input id="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Ex: Clio, 208..." />
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label htmlFor="minYear">Année min</Label>
          <Input id="minYear" type="number" value={minYear} onChange={(e) => setMinYear(e.target.value)} placeholder="2010" />
        </div>
        <div className="flex-1">
          <Label htmlFor="maxYear">Année max</Label>
          <Input id="maxYear" type="number" value={maxYear} onChange={(e) => setMaxYear(e.target.value)} placeholder="2024" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label htmlFor="minPrice">Prix min</Label>
          <Input id="minPrice" type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="5000" />
        </div>
        <div className="flex-1">
          <Label htmlFor="maxPrice">Prix max</Label>
          <Input id="maxPrice" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="50000" />
        </div>
      </div>
      <div>
        <Label htmlFor="maxMileage">Kilométrage max</Label>
        <Input id="maxMileage" type="number" value={maxMileage} onChange={(e) => setMaxMileage(e.target.value)} placeholder="100000" />
      </div>
      <Button type="submit" className="w-full">Appliquer les filtres</Button>
    </form>
  );
};

export default VehicleFilters;