import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JD Motors 80</h3>
            <p>Spécialiste du négoce automobile à Amiens</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/vehicules">Véhicules</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/a-propos">À Propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations Légales</h3>
            <ul className="space-y-2">
              <li><Link href="/mentions-legales">Mentions Légales</Link></li>
              <li><Link href="/confidentialite">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 JD Motors 80. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;