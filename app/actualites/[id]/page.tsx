import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      // Ici, vous feriez normalement un appel API pour récupérer les détails de l'article
      // Pour cet exemple, nous utilisons des données fictives
      setArticle({
        id,
        title: "Titre de l'article",
        content: "Contenu détaillé de l'article...",
        date: "2024-03-20"
      });
    }
  }, [id]);

  if (!article) return <div>Chargement...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-4">Publié le {new Date(article.date).toLocaleDateString('fr-FR')}</p>
      <div className="prose max-w-none">
        {article.content}
      </div>
    </div>
  );
}