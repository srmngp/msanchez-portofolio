import Image from 'next/image';
import React from 'react';

export default function ArtProductionDetails({ image, title, description, carrouselImages, artistName, year, location }) {
  return (
    <div>
      <Image src={image} alt={title} width={800} height={600} className='w-full h-auto object-cover' />
      <h2>{title}</h2>
      <p className='mb-4'>{description}</p>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        {carrouselImages}
      </div>
      <div className='text-sm grid grid-cols-3 gap-4 text-left max-w-lg'>
        <div className='w-full'>
          <p className='font-bold'>Artist:</p>
          <p>{artistName}</p>
        </div>
        <div className='w-full'>
          <p className='font-bold'>Year:</p>
          <p>{year}</p>
        </div>
        <div className='w-full'>
          <p className='font-bold'>Location:</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
