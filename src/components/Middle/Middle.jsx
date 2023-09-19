import React from 'react'
import CountUp from 'react-countup'

const Middle = () => {
  return (
    <section className=' padding-y  max-container '>
        <div className='grid lg:grid-cols-4 rounded-3xl bg-[#feebe5] md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 p-10 grid-cols-1 sm:gap-6 gap-10'>
            <div className='flex justify-center items-center gap-3'>
            {/* <h2 className='text-[40px] font-semibold '>10</h2> */}
            <CountUp className='text-[30px] md:text-[40px] font-semibold' start={0} end={10} duration={30} />
              <p className='capitalize text-gray-500'>Years of <br/>expriance </p>
            </div>
            <div className='flex justify-center items-center gap-3'>
            
            <p className='text-[30px] md:text-[40px] font-semibold'>  <CountUp  start={0} end={2000} duration={10} />+</p>
              <p className='capitalize text-gray-500'>fine <br/>destnation </p>
            </div>
            <div className='flex justify-center items-center gap-3'>
            <p className='text-[30px] md:text-[40px] font-semibold'>  <CountUp  start={0} end={9000} duration={10} />+</p>
              <p className='capitalize text-gray-500'>Customer <br/>reviews </p>
            </div>
            <div className='flex justify-center items-center gap-3'>
            {/* <h2 className='text-[30px] md:text-[40px] font-semibold '>4.8</h2> */}
            <p className='text-[30px] md:text-[40px] font-semibold'>  <CountUp  start={0} end={4.8} decimals={1} decimal="," duration={20} /></p>
              <p className='capitalize text-gray-500'> overall <br/>rating </p>
            </div>
          

        </div>
    </section>
  )
}

export default Middle