import React from 'react'
import Slillcard from './Slillcard';

const skillItem = [
  {
    imgSrc: '/images/nextjs.svg',
    label: 'NextJS',
    desc: 'React Framework'
  },
  {
    imgSrc: '/images/C++.svg',
    label: 'C++',
    desc: 'DSA and CP'
  },
  {
    imgSrc: '/images/c-lang.svg',
    label: 'C',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'Git/Github',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/docker.svg',
    label: 'Docker',
    desc: 'DevOps Tool'
  },
  {
    imgSrc: '/images/postman.svg',
    label: 'Postman',
    desc: 'API testing'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/linux.svg',
    label: 'Linux',
    desc: 'Operating System'
  },
  {
    imgSrc: '/images/java.webp',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/spring.png',
    label: 'Spring Boot',
    desc: 'Java Framework'
  },
  {
    imgSrc: '/images/typescript.png',
    label: 'TypeScript',
    desc: 'Programming Language'
  },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Explore the cutting-edge tools and technologies I leverage to build fast, reliable, and standout websites and applications and also for my enhancing my DSA skills.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc},key)=>(
                        <Slillcard key={key} imgSrc={imgSrc} label={label} desc={desc}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill