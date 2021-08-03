import React from 'react';
import {
  string,
  array,
} from 'prop-types';

export default function Text({content, markup}) {

  console.log({content})
  
  const TextContent = () => React.createElement(markup, {
    children: content,
  });

  return (
    <>
      <TextContent />
    </>
  );
};

Text.defaultProps = {
  markup: 'p',
};

Text.propTypes = {
  content: array.isRequired,
  markup: string,
};
