import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Education',
    href: '#education'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/rkt-12'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raunak-kumar-tripathi-51ba8728b/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rkt12_'
  },
  {
    label: 'E-mail',
    href: 'mailto:raunaktripathi749@gmail.com'
  },
  {
    label: 'Call',
    href: 'tel:+919546726229'
  },
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2 ">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Let&apos;s work together today!
                    </h2>
                    <button className='bg-sky-400 rounded-2xl pt-3 pb-3 pr-3 pl-3 cursor-pointer font-semibold text-zinc-900' onClick={() => window.location.href = "mailto:raunaktripathi749@gmail.com"}>Start Project &#8594;</button>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>
                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}>
                                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}>
                                    <a href={href} target="_blank" className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="">
                    <img src="/images/logo.svg" alt="Logo" className="" height={40} width={40}/>
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2025 <span className='text-zinc-200'>RKT</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer