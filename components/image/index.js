import React from 'react';
import { 
  CloudinaryContext,
  Image,
  Transformation,
 } from 'cloudinary-react';
 import styles from './image.module.scss';

export default function AppImage({ imageName, options, cloudName, alt, height, width }) {
  const version = process.env.CLOUDINARY_VERSION;

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
        >
          {options && options.map( option => <Transformation {...option} />)}
        </Image>
      </CloudinaryContext>
    </>
  );
};
