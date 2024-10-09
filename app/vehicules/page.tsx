import VehicleList from '@/components/vehicles/VehicleList';
import VehicleFilters from '@/components/vehicles/VehicleFilters';
import VehicleSorting from '@/components/vehicles/VehicleSorting';

export default function Vehicles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Catalogue de Véhicules</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <VehicleFilters />
        </aside>
        <main className="w-full md:w-3/4">
          <VehicleSorting />
          <VehicleList />
        </main>
      </div>
    </div>
  );
}