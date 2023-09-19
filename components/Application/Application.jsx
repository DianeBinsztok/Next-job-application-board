import React from 'react';
import Link from 'next/link';

const Application = () => {
  return (
    <section>
        <h1>Titre de l'offre</h1>
        <ul>
            <li>Entreprise: Google</li>
            <li>Contrat: CDD</li>
            <li>Ville: Bordeaux</li>
            <li>Statut: Postuler</li>
            <li>lien de l'annonce: <Link
            href={"https://google.com"}
            >https://google.com
            </Link>
            </li>

        </ul>
        <h2>L'offre:</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis veniam fugit, impedit placeat harum quasi dolore itaque doloremque provident quidem numquam molestiae odit eveniet amet nobis est. Voluptatibus, ut harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis vero minima sapiente, numquam aliquam cum soluta nesciunt dicta, omnis voluptatibus sequi nam dignissimos! Quis deleniti assumenda asperiores iste cum.
        </p>
    </section>
  )
}

export default Application