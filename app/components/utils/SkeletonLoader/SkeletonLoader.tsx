import React from 'react';
import './SkeletonLoader.css'; // Import the CSS for the skeleton loader

const SkeletonLoader = () => {
  return (
    <section className="container mx-auto pt-8 px-8 mt-20 skeleton-loader w-3/4 xl:w-6/12">
      <div className="flex gap-1">
        <div className="animate-pulse skeleton skeleton-breadcrumb-item"></div>
        <div className="animate-pulse skeleton skeleton-breadcrumb-item-slash"></div>
        <div className="animate-pulse skeleton skeleton-breadcrumb-item"></div>
      </div>
      <br />
      <div className="animate-pulse skeleton skeleton-title-h1"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <br /> <br /> <br />
      <div className="animate-pulse skeleton skeleton-title-h2"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <div className="animate-pulse skeleton skeleton-text"></div>
      <br /> <br />
      <div className="animate-pulse skeleton skeleton-image"></div>
    </section>
  );
};

export default SkeletonLoader;