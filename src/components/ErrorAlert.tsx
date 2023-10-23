import React from 'react'

export default function ErrorAlert({ msg }) {
  return (
    <div
      className='w-30 flex gap-3 max-w-lg mx-auto p-2 rounded-md shadow-md bg-red-600 text-white'
    >
      <div>
        <svg
          className='icon icon-tabler icon-tabler-alert-triangle'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 9v4'></path>
          <path
            d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z'
          ></path>
          <path d='M12 16h.01'></path>
        </svg>
      </div>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  )
}

