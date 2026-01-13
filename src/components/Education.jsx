import React from 'react'

const Education = () => {
  return (
    <section className="section" id='education'>
        <div className="px-3 mx-auto lg:px-8 xl:max-w-5xl">
            <div className='headline-2'>My Education Details</div>
            <div className='bg-zinc-800/50 p-5 rounded-2xl md:p-12 flex mb-5 mt-6 flex-col md:flex-row'>
                <div className="w-full">
                    <div className="text-zinc-50 font-semibold text-2xl pb-2">
                        Birla Institute of Technology, Mesra, Ranchi
                    </div>
                    <div className="text-zinc-400">
                        Bachelor of Technology 
                    </div>
                    <div className="text-zinc-400">
                        Computer Science and Engineering
                    </div>
                    <div className="text-zinc-400">
                        2023-2027
                    </div>
                    <div className="text-zinc-400">
                        CGPA - 8.71 (till 5th sem)
                    </div>
                </div>
                <div className="">
                    <img src="/images/bit.jpeg" alt="BIT" className="rounded-2xl hidden md:block" />
                </div>
            </div>
            <div className='bg-zinc-800/50 p-5 rounded-2xl md:p-12 flex mb-5 mt-6 flex-col md:flex-row'>
                <div className="w-full">
                    <div className="text-zinc-50 font-semibold text-2xl pb-2">
                        DAV Public School ,NIT Campus, Jamshedpur
                    </div>
                    <div className="text-zinc-400">
                        Class - XII
                    </div>
                    <div className="text-zinc-400">
                        PCMC
                    </div>
                    <div className="text-zinc-400">
                        2021-2022
                    </div>
                    <div className="text-zinc-400">
                        94.8 %
                    </div>
                </div>
                <div className="">
                    <img src="/images/dav.jpeg" alt="DAV" width={380} className="rounded-2xl hidden md:block" />
                </div>
            </div>
            <div className='bg-zinc-800/50 p-5 rounded-2xl md:p-12 flex mb-5 mt-6 flex-col md:flex-row'>
                <div className="w-full">
                    <div className="text-zinc-50 font-semibold text-2xl pb-2">
                        DAV Public School ,NIT Campus, Jamshedpur
                    </div>
                    <div className="text-zinc-400">
                        Class - X
                    </div>
                    <div className="text-zinc-400">
                        2019-2020
                    </div>
                    <div className="text-zinc-400">
                        95.6 %
                    </div>
                </div>
                <div className="">
                    <img src="/images/dav.jpeg" alt="DAV" width={380} className="rounded-2xl hidden md:block" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Education