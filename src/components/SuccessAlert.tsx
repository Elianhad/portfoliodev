
export default function SuccessAlert({ msg }) {
  return (
    <div
      className='w-30 flex gap-3 max-w-lg mx-auto p-2 rounded-md shadow-md bg-green-600 text-white'
    >
      <div>
        <svg
          className='icon icon-tabler icon-tabler-circle-check'
          width={30}
          height={30}
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
          <path d='M9 12l2 2l4 -4'></path>
        </svg>
      </div>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  )
}

