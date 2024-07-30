/* eslint-disable @next/next/no-img-element */
// components/FavoriteButton.client.jsx

'use client';

import React from 'react';

export default function FavoriteButton() {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    alert('Add to Favorites is Coming Soon!'); // Show an alert
  };

  return (
    <img 
      src="/icons/heart.svg"
      width="28"
      height="28"
      alt="Add this Job Post to Favorites"
    />
  );
}
