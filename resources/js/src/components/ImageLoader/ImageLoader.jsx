import React, { useState, useEffect } from 'react';

const ImageLoader = ({ src, alt = "", fallback = "/preloader.png" }) => {
  const [imageSrc, setImageSrc] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (src) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setImageSrc(src);
        setLoading(false);
      };
      image.onerror = () => {
        setImageSrc(fallback);
        setLoading(false);
      };
    }
  }, [src, fallback]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <img src={imageSrc} alt={alt} onError={() => setImageSrc(fallback)} />
  );
};

export default ImageLoader;
