import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThematicSections = () => {
  const sections = [
    { title: 'Marques Populaires', link: '/vehicules?category=popular' },
    { title: 'Véhicules Récents', link: '/vehicules?category=recent' },
    { title: 'Bonnes Affaires', link: '/vehicules?category=deals' },
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Découvrez Notre Sélection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Link href={section.link} key={index}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explorez notre sélection de {section.title.toLowerCase()}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ThematicSections;