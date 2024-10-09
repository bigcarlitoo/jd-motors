import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Les tendances du marché automobile en 2024",
    excerpt: "Découvrez les dernières tendances qui façonnent le marché automobile cette année.",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Comment choisir la bonne voiture d'occasion ?",
    excerpt: "Nos experts vous donnent leurs meilleurs conseils pour faire le bon choix.",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "L'entretien de votre véhicule : les gestes essentiels",
    excerpt: "Apprenez à prendre soin de votre voiture pour prolonger sa durée de vie.",
    date: "2024-03-05",
  },
  // Add more articles as needed
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Actualités et Conseils</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{article.excerpt}</p>
              <p className="text-sm text-gray-500 mb-4">Publié le {new Date(article.date).toLocaleDateString('fr-FR')}</p>
              <Link href={`/actualites/${article.id}`} className="text-primary hover:underline">
                Lire la suite
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}