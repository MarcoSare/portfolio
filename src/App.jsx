import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHouse, FaUserTie, FaFileCode, FaEnvelope   } from "react-icons/fa6";
import logo from './assets/images/logo.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
/* bg-[#030712d3]*/
  return (<>
    <header className='w-[100%] h-[60px] border-b	fixed border-slate-900 top-0 backdrop-blur-sm  bg-[#030712d3] z-[100] px-[32px]'>
      <div className='h-[59px] max-[1439px]:w-full w-[1440px] absolute left-1/2 transform -translate-x-1/2 flex items-center justify-between px-8' >
        <div className='flex items-center cursor-pointer'>
          <img src={logo} alt="logo" className='h-[30px] w-[60px] pr-[1rem] object-cover' />
          <h2 className='logo max-[450px]:text-xs'>Marco García</h2>
        </div>
        <ul className="flex space-x-6 items-center max-[800px]:hidden">
          <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer"><span>Home</span></li>
          <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer"><span>About</span></li>
          <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer"><span>Projects</span></li>
          <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer"><span>Contact</span></li>
        </ul>
        <div>

          <button className="btn hover:bg-gradient-to-r from-violet-700 to-purple-900 transition-all py-[4px] px-[16px] border border-subTextColor rounded-sm hover:border-transparent max-[450px]:text-xs" >Donwload CV</button>
        </div>

      </div>
    </header>

    <section className=' min-[801px]:hidden  w-[calc(100%-64px)] left-1/2  -translate-x-1/2 h-[60px] border-b	fixed border-slate-900 bottom-0 backdrop-blur-sm  bg-[#030712d3] z-[100] px-[32px] rounded-2xl mx-auto my-4'>
      <div className='flex items-center justify-between h-[60px]'>

        <div className='text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer'>
            <FaHouse/>
        </div>

        <div className='text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer'>
            <FaUserTie/>
        </div>

        <div className='text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer'>
            <FaFileCode/>
        </div>

        <div className='text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer'>
            <FaEnvelope/>
        </div>
      

      </div>
    </section>
    <section className="h-auto w-screen relative">


      <div className='h-[3000px]'>
        <img src="https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg" alt="" />
        <img src="https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg" alt="" />
        <img src="https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg" alt="" />
        <img src="https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg" alt="" />
        <img src="https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg" alt="" />
        <h1>Hola mundo</h1>

      </div>

    </section>
  </>
  )
}

export default App
