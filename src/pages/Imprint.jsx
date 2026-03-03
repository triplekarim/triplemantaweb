import React from 'react';
import { Link } from 'react-router-dom';

export default function Imprint() {
  return (
    <div className="imprint-page" style={{ padding: '3rem', color: '#fff' }}>
      
      <Link to="/">
        Back to home
      </Link>

      <h1>Imprint / Legal Notice</h1>
      <p>Service provider / Website owner<br />
        Ali Karim Güzel (sole proprietor / Einzelunternehmer)
      </p>
      <p>Business address<br />
        Ihlinger Straße 112 <br />
        72160 Horb a. N., Germany
      </p>
      <p>
        This is a summonable address (no P.O. box).
      </p>
      <p>Contact <br />
        Email: karim@triplemanta.com<br />
        Telephone:
      </p>
      <p>Legal form <br />
        Sole proprietorship (Einzelunternehmen) under German law
      </p>
      <p>Trade information <br />
        Registered business (Gewerbe) with:<br />
        [Name of municipality, e.g. City of Augsburg - Ordnungsamt]
      </p>
       <p>VAT status <br />
        Small business within the meaning of § 19 German VAT Act (Umsatzsteuergesetz).<br />
        No VAT is shown on invoices in accordance with the small business regulation (Kleinunternehmerregelung).
      </p>
      <p>Regulated professions <br />
        Not applicable (no regulated profession within the meaning of German professional regulations).
      </p>
      <p>
        Person responsible for content pursuant to § 18 II Medienstaatsvertrag (German State Media Treaty, MStV):<br />
        Ali Karim Güzel<br />
        Address: [same as above]
      </p>
      <p>
        Online dispute resolution<br />
        The European Commission provides an online dispute resolution (ODR) platform: 
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
      </p>
      <p>
        My email address is listed above in this imprint.
      </p>
      <p>
        Consumer dispute resolution under the VSBG<br />
        I am not willing and not obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
      <p>
        Copyright and liability for links<br />
        All content on this website (including text, graphics, and code) is protected by copyright where applicable.
      </p>
      <p>
        Despite careful control of external content, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
      </p>
    </div>
  );
}
