import React from 'react';
import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="max-w-7xl flex items-center mx-auto mt-6">
      <nav className="flex items-center justify-between px-10">
        <a href="/" className="flex mr-10"><img src={logo} alt="logo" className="w-26 h-10"/></a>
        <input type="text" className="border-2 focus:ring-2 focus:ring-blue-500 rounded-3xl h-10 mr-10" placeholder="Ai libertatea sa alegi ce vrei"/>
        <div className="flex items-center mr-4">
        <svg className="w-6 h-6 mx-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        <p>Contul meu</p>
        {/* <select name="" id="">
          <option value="">Contul meu</option>
          <option value="">Genius</option>
          <option value="">Comenzile mele</option>
          <option value="">Cardurile mele</option>
        </select> */}
        </div>
        <div className="mr-6 flex">
        <svg className="w-6 h-6 mx-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
        <p>Favorite</p>
        </div>
        <div className="mr-4 flex">
        <svg className="w-6 h-6 mx-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
        <p>Cosul meu</p>
        </div>
      </nav>
    </div>
  );
}

export default App;
