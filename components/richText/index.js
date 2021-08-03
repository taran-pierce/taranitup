import React from 'react';
import { 
  BLOCKS, 
  MARKS,
 } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Text from '../text';

// more options: https://www.npmjs.com/package/@contentful/rich-text-react-renderer
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Text content={text} markup={`strong`}>{text}</Text>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text content={children}/>,
  },
};

export default function RichText({copy}) {
  return documentToReactComponents(copy, options);
};
