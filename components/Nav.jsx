import React from 'react';
import Link from 'next/link';


const Nav = () => {
  return (
    <nav>
        <Link
            href="/"
        >
            Tableau de bord
        </Link>
        <Link
            href="/to-do-list"
        >
            To-do-list
        </Link>
        <Link
            href="/new-application"
        >
            Nouvelle candidature
        </Link>
        <Link
            href="/offers"
        >
            Offres
        </Link>
    </nav>
  )
}

export default Nav