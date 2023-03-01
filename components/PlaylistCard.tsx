import React from 'react';

interface PlaylistCardProps {
  image: string;
  title: string;
  description: string;
}

export const PlaylistCard = ({ image, title, description }: PlaylistCardProps) => {
  return (
    <div className='flex flex-col p-4 bg-spotify-black rounded-xl w-[181px] gap-3'>
      <img src={image} />
      <span className='text-md font-bold'>{title}</span>
      <span className='text-sm text-spotify-gray'>{description}</span>
    </div>
  );
};
