import React from 'react'
import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id='home'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src="/images/avatar-1.jpg" alt='portrait' height={40} width={40}/>
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'>
                                
                            </span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Tech Enthusiast. Web Developer. Code Crafter. Turning ideas into interactive experiences.
                </h2>
                <div className="flex items-center gap-3">
                    <button className='bg-sky-400 text-zinc-900 p-3 rounded-2xl font-semibold cursor-pointer' onClick={() => window.open("https://drive.google.com/file/d/1jT1CNVVz4slIU3ce_i3KSwTzg-RkNrnn/view?usp=sharing", "_blank")}>Download CV &#9698;</button>

                    <button className='bg-sky-400 text-zinc-900 p-3 rounded-2xl font-semibold'>Scroll Down &#9660;</button>
                </div>
            </div>
            <div className=" lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/hero2.png" height={800} width={656} alt="hero banner" className="w-full" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero