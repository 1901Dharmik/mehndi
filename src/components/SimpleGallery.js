import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
     <h2 class="my-8  text-center text-2xl font-bold text-red-600 md:mb-8 lg:text-3xl xl:mb-12">
        Image Gallery
      </h2>
    
    <div className="pswp-gallery grid lg:grid-cols-2 sm:grid-cols-1  gap-4 mx-4 py-4" id={props.galleryID}>
     
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <div className="">
          <img src={image.thumbnailURL} className='rounded-md shadow-lg' alt="" />

          </div>
        
        </a>
      ))}
    </div>
    </>
  );
}
