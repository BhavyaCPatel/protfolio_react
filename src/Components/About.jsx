import React from 'react'
import potrait from './Assets/img5.jpg'
const About = () => {
  const style = {
    borderBottom: '4px solid #FFD700'
};
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-navy-blue">
      <div className="p-4">
        <img src={potrait} alt="" className="w-3/4 h-3/4 ml-20 border-8 border-slate-800" />
      </div>
      <div className="p-4">
      <div className='text-center'>
        <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue " style={style}>I'm Bhavya Patel</span>
        </div>
        <p className="text-1xl font-semibold my-10 text-cream">A passionate web developer with a keen eye for crafting beautiful and functional websites. Welcome to my portfolio, where I'll take you on a journey through some of my most exciting projects and experiences.Web development isn't just a career for me, it's my creative outlet. From the moment I built my first website, I knew I had found my calling. I thrive on the ever-evolving nature of the web, and I am dedicated to staying at the forefront of technology to deliver the best solutions for my clients.</p>
        <div className="text-center mt-10">
          <a
            href="https://drive.google.com/file/d/1Ii0a9ZKDbVgjBvmoCh6ocs-8gWda_pHx/view?usp=drive_link"
            download="Resume_Bhavya.pdf"
            target='__blank'
            className="bg-gold text-navy-blue px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-navy-blue transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About