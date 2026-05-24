import React from 'react';
import BoiPokaImg from '../../assets/pngwing 1.png';

const Hero = () => {
    return (
        <div className='max-w-[1170px] mx-auto md:p-[66px] bg-[#f3f3f3] text-black rounded-3xl p-5'>
            <div className="hero">
  <div className="flex flex-col lg:flex-row-reverse">
    <div className='flex-1 md:max-w-[50%]'>
        <img
      src={BoiPokaImg} className="  rounded-lg max-w-[318px] h-[394px]"
    />
    </div>
    <div className='flex-1 md:max-w-[50%]'>
      <h1 className='lg:text-[56px] text-[40px] font-bold mb-12'>Books to freshen up your bookshelf</h1>
      <button className="btn bg-[#23BE0A] text-white border-0">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;