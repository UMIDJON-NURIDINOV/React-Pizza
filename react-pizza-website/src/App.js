import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import { GlobalStyes } from './GlobalStyes';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data'

function App() {
  return (
    <Router>
      <div className="scrollTopBtn">
        <i class="fas fa-angle-up">
          {
            window.addEventListener('DOMContentLoaded', () => {
              const scrollTopBtn = document.querySelector('.scrollTopBtn');
              window.addEventListener("scroll", () => {
                scrollTopBtn.classList.toggle('active', window.scrollY > 200)
              })

              scrollTopBtn.addEventListener('click', () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              })
            })
          }
        </i>
      </div>
      <GlobalStyes />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
