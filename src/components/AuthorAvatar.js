import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AuthorAvatar = ({ authorSrc, authorAlt }) => {
  const image = getImage({authorSrc});
  console.log(`{authorSrc} - {authorAlt}`);

  return (
    <GatsbyImage
      src={authorSrc}
      alt={authorAlt} />
  );
};

export default AuthorAvatar;
