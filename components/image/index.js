import React from 'react';
import { 
  CloudinaryContext,
  Image,
  Transformation,
 } from 'cloudinary-react';
 import styles from './image.module.scss';

 // get cloudName and version for CDN
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const version = process.env.CLOUDINARY_VERSION;

export default function AppImage({ imageName, options }) {

  return (
    <>
      <CloudinaryContext 
        cloudName={cloudName}
      >
        <Image 
          version={version} 
          publicId={imageName}
          className={styles.img}
        >
          {options && <Transformation {...options} />}
        </Image>
      </CloudinaryContext>
    </>
  );
};
