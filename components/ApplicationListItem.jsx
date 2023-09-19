import React from 'react';
import Link from 'next/link';

const ApplicationListItem = () => {
  return (
    
        <Link
            href="/application-detail"
        >
            <li>
            <h3>Titre de l'offre</h3>
            <div>Entreprise</div>
            <div>Ville</div>
            <div>Type de contrat</div>
            <div>Statut de la candidature</div>
            </li>
        </Link>
    
  )
}

export default ApplicationListItem