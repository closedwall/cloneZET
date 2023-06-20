"use client"
import card from "./card.module.css";
import React, { useRef, useEffect } from 'react';

const Card = (props) => {
  const hoverEffectRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const hoverEffect = hoverEffectRef.current;
      const x = event.clientX;
      const y = event.clientY;
      hoverEffect.style.transform = `perspective(1000px) rotateX(${x}) rotateY(${y}) scale3d(1, 1, 1);`;
    };
  });

  const { productImg, heading, description, bgColor } = props;
  return (
    <div ref={hoverEffectRef} id="hover-effect" className={card.container} style={{backgroundColor:bgColor}}>
      <div>
        <div>
          <img src={productImg} alt={heading} />
        </div>
        <div>
          <p className={card.head}>{heading}</p>
          <p className={card.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
