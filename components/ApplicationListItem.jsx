import React from 'react';
import Link from 'next/link';

const ApplicationListItem = ({title, company, city, contract, status}) => {
  return (
    
        <Link
            href="/application-detail"
        >
            <li>
            <h3>{title}</h3>
            <div>{company}</div>
            <div>{city}</div>
            <div>{contract}</div>
            <div>{status}</div>
            </li>
        </Link>
    
  )
}

export default ApplicationListItem