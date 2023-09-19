import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BiLogoMediumOld } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="flex items-end w-full  bg-white">

    <footer className="w-full text-gray-700 bg-[#feebe5] body-font">
        <div
            className="max-container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left md:mb-5">
                <a href='!#' className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                    
        <BiLogoMediumOld color="#ff5a1f" size={70} />
        <span className="text-[#ff5a1f]">OU</span>-Trip
                </a>
                <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
                <div className="mt-4">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a href='!#' aria-label="AiFillTwitterCircle" className="text-gray-500 cursor-pointer hover:text-gray-700">
                            <AiFillTwitterCircle size={20}/>
                        </a>
                        <a href='!#' aria-label="AiFillLinkedin" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <AiFillLinkedin size={20}/>
                        </a>
                        <a href='!#' aria-label="BsFacebook" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <BsFacebook size={20}/>
                        </a>
                        <a href='!#' aria-label="AiFillGithub" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <AiFillGithub size={20}/>
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center  md:mt-0 md:text-left">
                <ul className="w-full px-4 lg:w-1/4 md:w-1/2 mb-10 list-none">
                    <li className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
                        </li>
                </ul>
                <ul className="w-full px-4 lg:w-1/4 md:w-1/2 mb-10 list-none">
                    <li className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
                        </li>
                </ul>
                <ul className="w-full px-4 lg:w-1/4 md:w-1/2 mb-10 list-none">
                    <li className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                    </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                        </li>
                </ul>
                <ul className="w-full px-4 lg:w-1/4 md:w-1/2 mb-10 list-none">
                    <li className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                        </li>
                        <li className="mt-3">
                            <a href='!#' className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                        </li>
                </ul>
            </div>
        </div>
       
    </footer>

</div>
  )
}

export default Footer