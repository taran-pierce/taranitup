import React from 'react';
import { 
  bool,
} from 'prop-types';
import styles from './container.module.scss';

export default function Container({fluid, children}) {
  return (
    <>
      <div 
        className={fluid ? styles.containerFluid : styles.container}
      >
        {children}
      </div>
    </>
  );
};

Container.defaultProps = {
  fluid: false,
};

Container.propTypes = {
  fluid: bool,
};
