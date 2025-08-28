// File: src/components/Slider.jsx
import React, { useState, useEffect } from 'react';
import '../index.css';

const slides = [
  { id: 1, image: '/images/hero1.jpg', caption: 'Plumbing, AC & Repairs' },
  { id: 2, image: '/images/hero2.jpg', caption: 'Electrician, electricity provider' },
  { id: 3, image: '/images/hero3.jpg', caption: 'Beauty Services at Home' },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="custom-slider">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`custom-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="custom-caption">
            <h2>{slide.caption}</h2>
          </div>
        </div>
      ))}
      <button className="slider-btn prev" onClick={prevSlide}>❮</button>
      <button className="slider-btn next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
