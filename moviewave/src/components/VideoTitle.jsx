import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute top-1/2 transform -translate-y-1/2 w-full text-white p-6 md:p-12'>
            <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
            <p className='w-full md:w-1/3 mt-4'>{overview}</p>
            <div className='flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4'>
                <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md hover:bg-opacity-70'>
                    <CiCircleInfo size="24px" />
                    <span className='ml-1'>Watch more</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
