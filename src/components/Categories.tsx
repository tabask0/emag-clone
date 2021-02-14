import React from 'react'


const Categories = () => {
  return (
    <div className="w-full h-10 bgradient flex items-center justify-between my-6">
      <div className="group max-w-7xl flex justify-between items-center mx-44 my-10 text-white text-sm">
        <div className="dropdown">
      <button className="mr-4 hover-bg">Produse</button>
      <div className="dropdown-content">
        <div className="flex items-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" className="w-5 h-5 text-blue-500 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
      <a href="/">Laptop, Tablete & Telefoane</a>
      </div>
      <div className="flex items-center">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mouse" className="w-5 h-5 text-blue-500 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"></path></svg>
            <a href="/">PC, Periferice & Software</a>
      </div>
      <div className="flex items-center">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="w-5 h-5 text-blue-500 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
            <a href="/#">TV, Audio-Video & Foto</a>
      </div>
    <a href="/#">Electrocasnice & Climatizare</a>
    <a href="/#">Gaming, Carti & Birotica</a>
    <a href="/#">Bacanie</a>
    <a href="/#">Fashion</a>
    <a href="/#">Ingrijire personala & Cosmetice</a>
    <a href="/#">Casa, Gradina & Bricolaj</a>
    <a href="/#">Sport & Activitati in aer liber</a>
    <a href="/#">Auto, Moto & RCA</a>
    <a href="/#">Jucarii, Copii & Bebe</a>
    <a href="/#">Supermarket</a>
      </div>
      </div>
      <a href="/" className="mr-4">Resigilate</a>
      <a href="/" className="mr-4">Necesare zi de zi</a>
      <a href="/" className="mr-4">Extra-reducerile momentului</a>
      <a href="/" className="mr-10">Tazz by eMAG</a>
    </div>
    <div className="flex mr-44 items-center">
    <svg className="w-6 h-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>
    <a href="/" className="max-w-7xl flex text-white text-sm">eMAG Help</a>
    </div>
    </div>
  )
}

export default Categories
