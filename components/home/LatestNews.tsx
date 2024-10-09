import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const latestNews = [
  { title: "Les tendances du marché automobile en 2024", date: "2024-03-15" },
  { title: "Comment choisir la bonne voiture d'occasion ?", date: "2024-03-10" },
  { title: "L'entretien de votre véhicule : les gestes essentiels", date: "2024-03-05" },
];

export default function LatestNews() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Dernières Actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestNews.map((news, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{news.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Publié le {new Date(news.date).toLocaleDateString('fr-FR')}</p>
              <Link href="/actualites" className="text-primary hover:underline">
                Lire la suite
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/actualites" className="text-primary hover:underline">
          Voir toutes les actualités
        </Link>
      </div>
    </section>
  );
}