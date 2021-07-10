import React from 'react';
import {
  string,
} from 'prop-types';

export default function Text({content, markup}) {
  
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
  content: string.isRequired,
  markup: string,
};
