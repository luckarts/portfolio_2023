import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Masonry from './ListIllustration';
import { getIndexPhoto } from 'store/galeriePhoto/actions';
import { Helmet } from 'react-helmet';
import { Button, Loader } from 'components/shared';
const propTypes = {
  photoIndex: PropTypes.number,
  getIndexPhoto: PropTypes.func
};
/*

*/
const Galerie = ({ edit, getIndexPhoto, photoIndex, isAuthenticated }) => {
  //getIndexPhoto
  const tags = ['design', 'illustration'];
  const [tag, setTag] = useState('design');
  const { loading, error, data } = fetchData(api.artworks.getByTagArtworks, tag);
  const handleClick = (tag) => {
    setTag(tag);
  };
  return (
    <>
      <Helmet>
        <title>BachelArt - Artworks</title>
        <meta property="og:title" content="BachelArt Artworks"></meta>
        <meta property="og:url" content="https://bachelart.fr/illustrations"></meta>
        <meta name="description" content="Artworks / Illustrations / 2D / Photoshop " />
      </Helmet>

      <h2 className="text-primary text-center  afterTitle">Ma Galerie</h2>

      {isAuthenticated && (
        <Typography variante="link" addIcon href="/add/illustration">
          Importer une illustration
        </Typography>
      )}
      <div className="text-center pt-6 ">
        {' '}
        {tags.length > 0 &&
          tags.map((tagg, index) => (
            <Button
              key={index}
              transparent
              className={`px-2 py-1 capitalize xsl:mx-4 sm:mx-2 fadeSlide delay-${
                index === 0 ? 200 : (index / 5.0) * 1000 + 200
              }s  ${tagg === tag ? 'text-white bg-secondary rounded-lg' : 'text-primary'}`}
              onClick={() => handleClick(tagg)}
            >
              <span>{tagg}</span>
            </Button>
          ))}
      </div>
      {loading ? (
        <div className="my-24 text-center ">
          <Loader bg="bg-primary " />
        </div>
      ) : error ? (
        <span data-testid="error" className="text-red-800 text-center w-full">
          {error}
        </span>
      ) : (
        <Masonry getIndexPhoto={getIndexPhoto} photoIndex={photoIndex} data={data} />
      )}
    </>
  );
};
export const mapStateToProps = (state) => ({
  photoIndex: state.galeriePhoto.photoIndex,
  isAuthenticated: state.user.user
});
Galerie.propTypes = propTypes;

export default Galerie;
