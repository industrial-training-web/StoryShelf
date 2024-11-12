import React from 'react';
import bannerImage from '../../../public/banner.jpg';
import styles from './Landing.module.scss';

const Landing = () => (
  <div>
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
        margin: '10rem',
      }}
      className={styles.banner}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay with 50% opacity
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="text-4xl font-bold">Welcome to StoryShelf</h1>
        <p className="text-lg mt-4">
          Discover amazing features and content designed just for you!
        </p>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Landing;
