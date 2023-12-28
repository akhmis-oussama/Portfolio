import React from 'react';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import '../../App.css';

const Experiences = () => {
    const Data = [
        {
            id: 4,
            name: "OCTO TECHNOLOGY",
            category: "experience",
            logo: "uil uil-bag-alt",
            year: "26 June - 26 August 2023",
            title: "DevOps Engineering Intern",
            desc: "Deployment of a mobile core network at the base of the Open source Magma solution from the Linux Foundation project",
        },
        {
            id: 5,
            name: "YanConnect",
            category: "experience",
            logo: "uil uil-bag-alt",
            year: "20 July - 31 August 2022",
            title: "Frontend Developer Intern",
            desc: "Frontend Development and UX/UI Design for E-commerce Platform: IT Equipment Sales",
        },
    ];

    return (
        <section className="resume container section" id="experience">
            <Title>Experiences</Title>
            <div className="timeline space-y-8">
                {Data.map((val, id) => {
                    if (val.category === "experience") {
                        return (
                            <div key={id} className="flex items-center space-x-4">
                                <div className="bg-gray-400 w-1 h-8"></div>
                                <div className="flex-shrink-0">
                                    <i className={`${val.logo} text-4xl text-blue-500`} />
                                </div>
                                <div>
                                    <Title style={{ fontSize: '1rem' }}>{val.title}</Title>
                                    <p className="text-gray-600">{val.name} | {val.year}</p>
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

export default Experiences;
