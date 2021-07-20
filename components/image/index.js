import React, { useEffect, useState } from 'react';
import { 
  CloudinaryContext,
  Image,
  Transformation,
 } from 'cloudinary-react';
 import styles from './image.module.scss';

export default function AppImage({ 
  imageName, 
  options, 
  cloudName, 
  alt, 
  height, 
  width,
  dataSrc,
 }) {

  const version = process.env.NEXT_PUBLIC_VERSION;

  const [isProd, setIsProd] = useState(false);

  useEffect(() => {
    const hasWWW = window && window.location.hostname.match('www').length >= 1 || false;

    setIsProd(hasWWW);

    console.log({hasWWW});
  }, []);

  return (
    <>
      <CloudinaryContext 
        cloudName={cloudName}
      >
        <Image 
          version={version} 
          publicId={imageName}
          className={styles.img}
          height={height}
          width={width}
          alt={alt}
          dataSrc={dataSrc}
          secure={isProd}
        >
          {options && options.map( (option, index) => <Transformation key={`${cloudName}-${index}`} {...option} />)}
        </Image>
      </CloudinaryContext>
    </>
  );
};
