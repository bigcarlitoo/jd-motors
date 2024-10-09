export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Informations légales</h2>
          <p>
            JD Motors 80<br />
            Société à responsabilité limitée (SARL) au capital de 50 000 €<br />
            RCS Amiens B 123 456 789<br />
            Siège social : 123 Rue de la République, 80000 Amiens<br />
            N° TVA intracommunautaire : FR 12 345678901
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Directeur de la publication</h2>
          <p>M. Jean Dupont, Gérant</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Hébergeur du site</h2>
          <p>
            OVH SAS<br />
            2 rue Kellermann - 59100 Roubaix - France
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Protection des données personnelles</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant à l'adresse : contact@jdmotors80.fr
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Limitation de responsabilité</h2>
          <p>
            JD Motors 80 ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.jdmotors80.fr, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
        </section>
      </div>
    </div>
  );
}