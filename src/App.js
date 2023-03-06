import React, { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from './components/DotGroup';
import Landing from './screens/Landing';
import MySkills from './screens/MySkills';
import Navbar from './components/Navbar';
import Projects from './screens/Projects';
import Testimonials from './screens/Testimonials';
import Contact from './screens/Contact';



function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true); 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className='app'>
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
         {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      {/* we defined these css properties to see the scroll-bar of the page */}
      <div className='w-5/6 mx-auto md:h-full'> 
        <MySkills/>
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Projects/>
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials/>
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
