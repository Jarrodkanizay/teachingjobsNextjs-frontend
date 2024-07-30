'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    ga: any;
    gtag: any;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // Ensure the script is only added once
    if (window.ga) return;

    // Add Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-X29K6NZB61`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-X29K6NZB61');
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
