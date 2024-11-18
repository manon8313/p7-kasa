import React from 'react';
import './Home.css';
import bannerImage from '../assets/BannerHome.png';

export default function Banner() {
  return (
    <main className="main-home">
      <article className="banner">
        <img
          className="banner_img"
          src={bannerImage}
          alt="Chez vous, partout et ailleurs"
        />
        <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
      </article>
    </main>
  );
}