import React from 'react'

const aboutItems = [
  {
    label: 'Projects done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
  return (
    <section className="section" id='about'>
        <div className="container">
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hii! I&apos;m Raunak, currently I am in BIT Mesra pursuing Bachelor of Technology in Computer Science and Technology in my 2nd year maintaining a CGPA of 8.73. I'm a passionate builder of digital experiences with a love for problem-solving and modern web technologies. From dynamic frontends to efficient backends, I design and develop complete solutions—powered by curiosity, precision, and a drive to create meaningful tech. I also have interest in solving DSA problems and I've solved more than 800 of them as of now.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label,number},key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))}
                    <img src="/images/logo.svg" alt="Logo" height={30} width={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About