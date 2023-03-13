import React from 'react';
import Portal from './Portal';
import Image from 'next/image';

const Img = ({ item }) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center cursor-pointer" onClick={() => setShow(true)}>
        <Image width="300" height="200" objectFit="contain" src={item.image} alt={item.name} />
      </div>
      {setShow && (
        <Portal onClose={() => setShow(false)} show={show}>
          <div className="h-screen w-screen flex justify-center bg-white backdrop-blur-sm bg-opacity-10">
            <Image src={item.image} alt="none" width="500" height="500" objectFit="contain" />
          </div>
        </Portal>
      )}
    </>
  );
};

export default Img;
