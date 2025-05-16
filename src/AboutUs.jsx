import React from 'react';
import './About.css';

function AboutUs() {
  return (
    <div className="App">
      
      <Hero />
      <WhoWeAre />
      <Mission />
      <Products />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}



function Hero() {
  return (
    <section className="hero">
      <h1>About Fresh Market</h1>
      <h2>Your One-Stop Destination for Fresh & High-Quality Food</h2>
      <p>Delivered right to your doorstep.</p>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who-we-are" className="section">
      <h2>Who We Are</h2>
      <p>At QuickBasket, we are committed to delivering <strong>fresh and high-quality food items</strong> right to your doorstep. Our range includes <strong>vegetables, dairy products, meat and seafood, groceries, and bakery essentials</strong>. We prioritize freshness, quality, and customer satisfaction.</p>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="section">
      <h2>Our Mission</h2>
      <p>To provide <strong>fresh, organic, and high-quality</strong> food products while maintaining the highest standards of hygiene, sustainability, and customer convenience.</p>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section">
      <h2>Our Products</h2>
      <ul>
        <li>Fresh Vegetables</li>
        <li>Dairy Products</li>
        <li>Meat & Seafood</li>
        <li>Groceries & Staples</li>
        <li>Bakery & Beverages</li>
      </ul>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section">
      <h2>Why Choose QuickBasket?</h2>
      <ul>
        <li>✔ 100% Fresh & Quality Products</li>
        <li>✔ Ethically Sourced & Hygienic</li>
        <li>✔ Quick & Hassle-Free Delivery</li>
        <li>✔ Affordable Prices & Discounts</li>
        <li>✔ Excellent Customer Support</li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 QuickBasket. All rights reserved.</p>
    </footer>
  );
}

export default AboutUs;
