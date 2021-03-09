import React from 'react'
import genius from '../assets/genius.jpg'
import easybox from '../assets/easybox.jpg'
import livrare from '../assets/livrare.jpg'
import card from '../assets/card.jpg'
import voucher from '../assets/voucher.jpg'

const Services = () => {
  return (
    <div className="max-w-7xl flex items-center page-section mx-auto">
      <div className="w-28 h-24 page-section-container flex items-center justify-between mx-auto py-2 px-6 border border-gray-100 shadow box-border">
              <a href="/" className="flex items-center text-sm font-semibold"><img src={genius} alt="genius" className="w-14 h-14 mr-4"/> eMAG Genius</a>
              <a href="/" className="flex items-center text-sm font-semibold"><img src={easybox} alt="genius" className="w-14 h-14 mr-4"/>easybox by eMAG</a>
              <a href="/" className="flex items-center text-sm font-semibold"><img src={livrare} alt="genius" className="w-14 h-14 mr-4"/>Livrare in 1h</a>
              <a href="/" className="flex items-center text-sm font-semibold"><img src={card} alt="genius" className="w-14 h-14 mr-4"/>Cardul eMAG de la<span className="absolute mt-10 ml-20 items-center"> Raiffeisen Bank</span></a>
              <a href="/" className="flex items-center text-sm font-semibold"><img src={voucher} alt="genius" className="w-14 h-14 mr-4"/>Daruieste un<span className="absolute mt-10 ml-16"> voucher eMAG</span></a>
      </div>
    </div>
  )
}

export default Services
