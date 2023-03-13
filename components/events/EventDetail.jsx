import React from 'react';

import { Cash, Person, People, Calendar, Trophy } from 'react-ionicons';
import Image from 'next/image';
function EventDetail({ price, participants }) {
  return (
    <div className="w-full flex  bg-white bg-opacity-10 backdrop-blur-lg p-6 lg:p-8 rounded-lg">
      <table className="w-full flex flex-col text-xl lg:text-3xl">
        <tbody>
          {[
            {
              icon: (
                <Image
                  width="28"
                  height="28"
                  alt="non"
                  src="https://img.icons8.com/material-outlined/96/ffffff/rupee.png"
                />
              ),
              value: price,
            },
            { icon: <People color="#fff" strokeWidth={3} />, value: participants },
            { icon: <Calendar color="#fff" strokeWidth={3} />, value: '28-29-30 April' }
          ].map((item, index) => (
            <tr key={index} className="">
              <td className="pr-4 flex justify-center items-center">{item.icon}</td>
              <td className="font-light text-xl">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventDetail;
