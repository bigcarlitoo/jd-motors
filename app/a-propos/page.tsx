import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">À Propos de JD Motors 80</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
          <p className="mb-4">
            Fondée en 2010, JD Motors 80 s'est rapidement imposée comme un acteur majeur du négoce automobile à Amiens. Notre passion pour l'automobile et notre engagement envers la satisfaction client ont été les moteurs de notre croissance constante.
          </p>
          <p>
            Aujourd'hui, nous sommes fiers de proposer une large gamme de véhicules d'occasion de qualité, ainsi qu'un service personnalisé pour répondre aux besoins spécifiques de chaque client.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Notre Équipe</h2>
          <p className="mb-4">
            Chez JD Motors 80, notre équipe est composée de professionnels passionnés et expérimentés dans le domaine automobile. Chacun de nos membres s'engage à fournir un service de qualité et des conseils experts pour vous aider à trouver le véhicule parfait.
          </p>
          <p>
            Notre expertise couvre tous les aspects du négoce automobile, de la sélection rigoureuse des véhicules à la gestion des formalités administratives, en passant par le service après-vente.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Qualité", description: "Nous ne proposons que des véhicules soigneusement sélectionnés et inspectés." },
            { title: "Transparence", description: "Nous fournissons toutes les informations nécessaires pour une décision éclairée." },
            { title: "Service Client", description: "La satisfaction de nos clients est notre priorité absolue." },
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}