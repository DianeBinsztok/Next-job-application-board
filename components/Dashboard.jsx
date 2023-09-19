import React from 'react'
import ApplicationListItem from './ApplicationListItem';

const Dashboard = () => {
    
    const applicationItems = [
        {
            id:0,
            title:"Développeur fullstack JS",
            company:"Google",
            city:"Bordeaux",
            contract:"CDI",
            status:"À relancer"
        },
        {
            id:1,
            title:"Développeur React",
            company:"Facebook",
            city:"Bordeaux",
            contract:"CDD",
            status:"En cours"
        },
        {
            id:2,
            title:"Développeur PHP Wordpress",
            company:"Trucmuche",
            city:"Valence",
            contract:"CDI",
            status:"En cours"
        }
    ];

    const applicationsList = [];

    for(let item of applicationItems){
        applicationsList.push(
            <ApplicationListItem 
            title={item.title}
            company = {item.company}
            city = {item.city}
            contract = {item.contract}
            status = {item.status}/>
        );
    }

        return (
            <ul>
                {applicationsList}
            </ul>
        )
            

    


       
}

export default Dashboard;