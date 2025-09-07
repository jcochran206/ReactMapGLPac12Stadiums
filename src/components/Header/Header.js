import React, {useState} from 'react'; 
import { NavLink } from 'react-router-dom';
import {FaClipboard, FaFootballBall} from 'react-icons/fa';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {MdHistoryEdu} from 'react-icons/md';

const Header = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/* left side */}
    <div onClick={() => setNav(!nav)} className='flex items-center'>
        <div className="cursor-pointer">
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Pac12<span className='font-bold'>Football</span>
        </h1>
        <FaFootballBall />
    </div>

    {/* mobile */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}
    
    {/* side menu */}

    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className='text-2xl p-4'>PAC12 <span className='bold'>Champions</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <NavLink to='/' className='text-xl py-4 flex'><FaFootballBall size={25} className="mr-4" />Home</NavLink>
                <NavLink to='/about' className='text-xl py-4 flex'><FaClipboard size={25} className="mr-4" />About</NavLink>
                <NavLink to='/history' className='text-xl py-4 flex'><MdHistoryEdu size={25} className="mr-4" />History</NavLink>
                <NavLink to='/conference-map' className='text-xl py-4 flex'><FaFootballBall size={25} className="mr-4" />Conference Map</NavLink>
            </ul>
        </nav>
    </div>
</div>
  )
}

export default Header