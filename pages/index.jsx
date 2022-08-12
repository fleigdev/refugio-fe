import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BasicLayout from '../layouts/BasicLayout';
import Header from '../components/Header';
import About from '../components/About';
import AdoptSection from '../components/Adopt/AdoptSection';
import BlogSection from '../components/Blog/BlogSection';
import ContactSection from '../components/Contact/ContactSection';
import {getLandingData} from "../api/landing";


export default function Home() {
  const [landingData, setLandingData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLandingData();
      setLandingData(response.data);
      // console.log(response);
      // console.log(landingData);
    })();
  }, []);

  if (!landingData) return null;

  return (
    <div>
      <Header  />
      <About sobreNosotros={landingData.attributes.sobrenosotros} sobreNosotros2={landingData.attributes.sobrenosotros2}/>
      <AdoptSection textoAdoptar={landingData.attributes.textoadoptar}  />
      <BlogSection textoBlog={landingData.attributes.textoblog}  />
      <ContactSection />
    </div>
  );
}
