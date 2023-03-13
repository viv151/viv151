import React, { useState, useCallback } from 'react';
import PageTitle from '../components/utils/PageTitle';
import Layout from '../layout/Layout';
import Photos from '../SiteData/GlimpseData.js';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

function Glimpse() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout title="Glimpses">
      <PageTitle title="Glimpses" />
      <div className="flex item-center justify-center m-5">
        <iframe
          width="760"
          height="315"
          src="https://www.youtube.com/embed/oX-opSiVojo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <Gallery photos={Photos} onClick={openLightbox} />
        <div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={Photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </Layout>
  );
}

export default Glimpse;
