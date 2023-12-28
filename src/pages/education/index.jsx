import React from 'react';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import '../../App.css';

const Education = () => {
    const Data = [
        {
            id: 1,
            category: "education",
            logo: "uil uil-graduation-cap",
            year: "2021- 2024",
            title: "National Institute Of Posts and Telecommunications",
            desc: "Advanced Software Engineering for Digital services ",
            city: "Rabat - Morocco",
        },
        {
            id: 2,
            category: "education",
            logo: "uil uil-graduation-cap",
            year: "2019-2021",
            title: "CPGE Prince Moulay Abdellah",
            desc: "Technology & Industrial Science",
            city: "Safi - Morocco",
        },
        {
            id: 3,
            category: "education",
            logo: "uil uil-graduation-cap",
            year: "2018-2019",
            title: "Technical High School Mohammed VI",
            desc: "Baccalaureate in Electrical Sciences and Technologies",
            city: "Marrakesh - Morocco",
        },
        {
            id: 4,
            category: "Certification",
            logo: "uil uil-bag-alt",
            year: "31 July 2023",
            title: "AWS Certified Cloud Practitionner",
            desc: "Badge ID : 8ac068b8-4b97-4134-8449-822d46baacfe",
        },
        {
            id: 5,
            category: "Certification",
            logo: "uil uil-bag-alt",
            year: "12 April 2024",
            title: "AWS Certified Solutions Architect",
            desc: "Badge ID : In Progress",
        },
    ];

    return (
        <section className="resume container section" id="experience">
            <Title>Academic Background</Title>
            <div className="timeline space-y-8">
                {Data.map((val, id) => {
                    if (val.category === "education") {
                        return (
                            <div key={id} className="flex items-center space-x-4">
                                <div className="bg-gray-400 w-1 h-8"></div>
                                <div className="flex-shrink-0">
                                    <i className={`${val.logo} text-4xl text-blue-500`} />
                                </div>
                                <div>
                                    <Title style={{ fontSize: '1rem' }}>{val.title}</Title>
                                    <p className="text-gray-600">{val.year} | {val.city}</p>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
    
            <Title>Certifications</Title>
            <div className="timeline space-y-8">
                {Data.map((val, id) => {
                    if (val.category === "Certification") {
                        return (
                            <div key={id} className="flex items-center space-x-4">
                                <div className="bg-gray-400 w-1 h-8"></div>
                                <div className="flex-shrink-0">
                                    <i className={`${val.logo} text-4xl text-blue-500`} />
                                </div>
                                <div>
                                    <Title style={{ fontSize: '1rem' }}>{val.title}</Title>
                                    <p className="text-gray-600">{val.year}</p>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </section>
    );
};

export default Education;
