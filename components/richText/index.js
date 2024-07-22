import React from 'react';
import { 
  BLOCKS, 
  MARKS,
 } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Typography } from '@mui/material';

// more options: https://www.npmjs.com/package/@contentful/rich-text-react-renderer
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Typography component="b">{text}</Typography>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Typography component='p'>{children}</Typography>,
  },
};

export default function RichText({copy}) {
  return documentToReactComponents(copy, options);
};
