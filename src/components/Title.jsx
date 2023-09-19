import React from 'react'

const Title = ({title2,title1,coloredTit,text,text2,center,
  start}) => {
  return (
    <div className={center&& "text-center" }>
        <h2 className='text-4xl font-bold font-palanquin mb-5 overflow-hidden'>{title1} <span className='text-[#ff5a1fff]'>{coloredTit}</span> {title2}</h2>
        <p className='text-gray-400 text-[18px]  sm:w-full'>
            {text}
        </p>
        {text2 && <p className='text-gray-400 text-[18px]  mt-5 sm:w-full'>{text2}</p>}
    </div>
  )
}

export default Title