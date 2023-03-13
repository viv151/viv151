import React from 'react';
import Link from 'next/link';
import { Call } from 'react-ionicons';

function EventContact() {
  return (
    <div className="w-full bg-white bg-opacity-10 backdrop-blur-lg p-6 lg:p-8 rounded-lg ">
      <h4 className="text-2xl font-normal flex items-center mb-2 w-full">
        <Call color="#fff" width="24px" />
        <span className="ml-2">Contact</span>
      </h4>
      <h2>
        <span>Abinav : </span>
        <span className="font-bold">
          <Link href="tel:+91 8849044180"> +91 8849044180</Link>
        </span>
      </h2>
    </div>
  );
}

export default EventContact;
