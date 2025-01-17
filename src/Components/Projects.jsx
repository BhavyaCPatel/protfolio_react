import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from './Assets/Logo2.png';
const Project = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <nav className="bg-navy-blue text-cream py-4 px-3">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-gold text-3xl font-semibold">
                        <img src={logo} alt="logo" width={'70px'} height={'70px'} />
                    </Link>
                    <ul className="space-x-6">
                        <li className="inline-block">
                            <Link to="/" className="text-gold hover:text-cream">
                                Home
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link to="/projects" className="text-gold hover:text-cream">
                                Projects
                            </Link>
                        </li>
                        <li className="inline-block">
                            <a href="https://theinformativecorner.netlify.app/" target='__blank' className="text-gold hover:text-cream">Blogs</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='text-center m-5 md:m-10 lg:m-10'>
                <div className=' text-center mt-10' data-aos='zoom-in' data-aos-duration="4000">
                    <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar">Projects</span>
                </div><br /><br />
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">EvenTara</h5>
                        <p className="text-xl p-3">Welcome to EvenTara, your go-to event management solution! Create, update, and delete events seamlessly with authentication and authorization powered by Clerk. Integrate Stripe for secure payment processing.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/EvenTara' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://eventara.vercel.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Medium Clone</h5>
                        <p className="text-xl p-3">This is Medium Clone, your ultimate blogging platform! Effortlessly publish blogs with a rich-text editing experience powered by Tiptap. Enjoy seamless user authentication and a reliable backend hosted on Cloudflare for a secure blogging journey.

                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Medium' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://medium-ten-blue.vercel.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Student Management App</h5>
                        <p className="text-xl p-3">This MERN stack Student Management System allows students to log in, view details, and check marksheets, while faculty can manage student details and upload marksheets.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Students-Management' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>

                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">ToDo App</h5>
                        <p className="text-xl p-3">A Full Stack task managing app built with latest technologies capable of CRUD operations.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/To-Do-App' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>

                        </div>
                    </div>
                </div>
                
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Prompt Forge</h5>
                        <p className="text-xl p-3">Welcome to Prompt Forge, where you can create and maintain your chatGPT prompts. You can also share them with the world and explore prompts created by others. With the safety of authentication and authorization powered by Google.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Prompt-Forge' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://prompt-forge-ten.vercel.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Shopping Cart</h5>
                        <p className="text-xl p-3">Welcome to ReduxBasket, your go-to shopping cart solution! Manage your items effortlessly with features like adding, removing, updating quantities, deleting items, and clearing the entire cart.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/ShoppingCart_Redux' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://reduxbasket.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Task Master</h5>
                        <p className="text-xl p-3">A simple task managing app built with redux-toolkit capable of CRUD operations.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/ToDo_Basic' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://taskmasterss.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue" >
                        <h5 className="text-4xl text-center mt-5 ">Avirat Escapes</h5>
                        <p className="text-xl p-3">Avirat Escapes is a ReactJS-based web application for travel and adventure enthusiasts. It simplifies travel planning, offering features like tour packages,trekking adventures, and campsite getaways.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Avirat' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://aviratescapes.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1400'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">The Informative Corner</h5>
                        <p className="text-xl p-3">Welcome to The Informative Corner! This is my personal blog where I share insights, thoughts, and expertise on a wide range of trending topics. Explore informative articles covering AI, programming, travel, fashion, food, aquascaping, gardening, business, and more.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Blog' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://theinformativecorner.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Vintage Boys</h5>
                        <p className="text-xl p-3">A sports fashion company it has a main-page with company's overview and a store page with latest fashion, it is built with html, css and bootstrap.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Sports-fashion-store' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://vintageboys.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Apple Clone</h5>
                        <p className="text-xl p-3">A clone of apple's official website built with html, css and bootstrap.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Apple-Clone' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://applec.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">ClearSky Forecast</h5>
                        <p className="text-xl p-3">ClearSky Forecast is a weather application that allows users to fetch and view weather information for any city.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Avirat' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://aviratescapes.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Yelp Camp</h5>
                        <p className="text-xl p-3">Yelp Camp is a camping website that helps outdoor enthusiasts discover the best campsites close to nature and embark on adventurous experiences. Explore our curated collection of campsites and plan your next camping adventure with ease.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Camping-website' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://yelpcampsites.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Clock</h5>
                        <p className="text-xl p-3">A simple digital clock built using HTML, CSS, and JavaScript. This clock features a dark and light mode toggle for better visibility in different lighting conditions.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Clock' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://bhavyacpatel.github.io/Clock/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-green-blue rounded-lg my-6 mx-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='800'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Banana-Speak</h5>
                        <p className="text-xl p-3">Made a translation web app that will translate your sentences into Banana language.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Banana-Speak' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://minionsboli.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container border-2 bg-dgreen-blue rounded-lg my-6 mx-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='800'>
                    <div className="text-navy-blue">
                        <h5 className="text-4xl text-center mt-5 ">Pirate-Speak</h5>
                        <p className="text-xl p-3">Made a translation web app that will translate your sentences into Pirate's language.
                        </p>
                        <div className="text-center my-4">
                            <a href='https://github.com/BhavyaCPatel/Pirate-Speak' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue  hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Source Code
                            </a>
                            <a href='https://ahoypirate.netlify.app/' target='__blank' className="bg-gold text-navy-blue px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 border-navy-blue hover:text-navy-blue transition duration-300 ease-in-out mx-2">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project