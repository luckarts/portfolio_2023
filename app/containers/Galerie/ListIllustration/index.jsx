import React, { useState } from 'react';
import { Masonry, LazyImage, Lightbox } from 'components/shared';
import 'react-image-lightbox/style.css';
import './style.scss';

const ListIllustration = ({ photoIndex, getIndexPhoto, data }) => {
  const [lightboxIsOpen, setIsOpen] = useState(false);

  const openLightbox = index => {
    getIndexPhoto(index);
    setIsOpen(true);
  };

  const closeLightbox = bool => {
    setIsOpen(bool);
  };

  return (
    <div className="w-11/12 mt-12 mb-6 xs:mb-24 m-auto masonry " style={{ minHeight: '500px' }}>
      <Masonry
        columnsCountBreakPoints={data.gallery.length < 4 ? { 350: 1, 750: 1, 900: 2 } : { 350: 2, 750: 2, 900: 4 }}
      >
        {data &&
          data.gallery.map((photo, i) => (
            <div key={i}>
              <div className="cursor-pointer ">
                {photo && photo.link ? (
                  <a href={'/img/' + photo.link} target="_blank">
                    <LazyImage
                      className="rounded-lg w-full mt-4 object-fill transition duration-300 ease-in-out hover:scale-105"
                      key={i}
                      src={'/img/' + photo.image}
                      alt={photo.image}
                      placeholder={'/thumb/img/' + photo.image}
                    />
                  </a>
                ) : (
                  <LazyImage
                    onClick={() => openLightbox(i)}
                    className="rounded-lg w-full mt-4 object-fill transition duration-300 ease-in-out hover:scale-105"
                    key={i}
                    src={'/img/' + photo.image}
                    alt={photo.image}
                    placeholder={'/thumb/img/' + photo.image}
                  />
                )}
              </div>
            </div>
          ))}
      </Masonry>
      <Lightbox
        photoIndex={photoIndex}
        lightboxIsOpen={lightboxIsOpen}
        closeLightbox={closeLightbox}
        getIndexPhoto={getIndexPhoto}
        photos={data.gallery}
      />
    </div>
  );
};

export default ListIllustration;
