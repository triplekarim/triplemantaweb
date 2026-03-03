import React from 'react';
import { Link } from 'react-router-dom';

export default function Imprint() {
  return (
    <div className="imprint-page blue-bg fullscreen" style={{ padding: '5rem', color: '#fff' }}>
      
      <Link to="/" className='no-deco'>
        Back to home
      </Link>

      <h1>Imprint / Legal Notice</h1>

      <h2>English Version</h2>

      <p><b>Service provider / Website owner</b> <br />
        Karim Güzel Creative Labs <br />
        Owner: Ali Karim Güzel
      </p>

      <p><b>Business address</b><br />
        Ihlinger Straße 112 <br />
        72160 Horb a. N. <br />
        Germany <br /> <br />
        <i>(This is a summonable address, no P.O. Box.)</i>
      </p>

      <p><b>Contact</b> <br />
        Email: karim@triplemanta.com<br />
        Telephone: +49 1512 0547476
      </p>
      <p><b>Legal form</b> <br />
        Sole proprietorship (Einzelunternehmen) under German law
      </p>
       <p><b>VAT status</b> <br />
        Small business within the meaning of § 19 German VAT Act (Umsatzsteuergesetz).<br />
        No VAT is shown on invoices in accordance with the small business regulation (Kleinunternehmerregelung).
      </p>
      <p><b>Regulated professions</b> <br />
        Not applicable (no regulated profession within the meaning of German professional regulations).
      </p>
      <p>
        <b>Person responsible for content pursuant to § 18 II Medienstaatsvertrag (German State Media Treaty, MStV)</b><br />
        Ali Karim Güzel<br />
        Ihlinger Straße 112 <br />
        72160 Horb a. N. <br />
        Germany <br />
      </p>
      
      <p>
        <b>Consumer dispute resolution under the VSBG</b><br />
        I am not willing and not obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>

      <p>
        <b>Copyright and liability for links</b><br />
        All content on this website (including text, graphics, and code) is protected by copyright where applicable. <br />
      </p>

      <p>
        Despite careful control of external content, I assume no liability for the content of external links. <br />
        The operators of the linked pages are solely responsible for their content.
      </p> <br />


      <h2>German / Deutsche Version</h2>

      <p><b>Diensteanbieter / Website-Betreiber</b> <br />
        Karim Güzel Creative Labs <br />
        Inhaber: Ali Karim Güzel
      </p>

      <p><b>Geschäftsadresse</b><br />
        Ihlinger Straße 112 <br />
        72160 Horb a. N. <br />
        Deutschland <br /> <br />
        <i>(Dies ist eine ladungsfähige Anschrift.)</i>
      </p>

      <p><b>Kontakt</b> <br />
        Email: karim@triplemanta.com<br />
        Telefon: +49 1512 0547476
      </p>

      <p><b>Rechtsform</b> <br />
        Einzelunternehmen nach deutschem Recht.
      </p>

       <p><b>Umsatzsteuerstatus</b> <br />
        Kleinunternehmer im Sinne von § 19 Umsatzsteuergesetz (UStG). <br />
        Es wird gemäß der Kleinunternehmerregelung nach § 19 UStG keine Umsatzsteuer ausgewiesen.
      </p>

      <p><b>Reglementierte Berufe</b> <br />
        Nicht anwendbar (kein reglementierter Beruf im Sinne der deutschen Berufsordnungen).
      </p>
      <p>
        <b>Verantwortlicher für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)</b><br />
        Ali Karim Güzel<br />
        Ihlinger Straße 112 <br />
        72160 Horb a. N. <br />
        Deutschland <br />
      </p>
      
      <p>
        <b>Verbraucherstreitbeilegung nach dem VSBG</b><br />
        Ich bin weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        <b>Urheberrecht und Haftung für Links</b><br />
        Alle Inhalte dieser Website (einschließlich Texte, Grafiken und Code) sind, soweit anwendbar, urheberrechtlich geschützt. <br />
      </p>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. <br />
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

    </div>
  );
}
