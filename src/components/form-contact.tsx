import { useState, type FormEvent, useRef } from 'react'
import ErrorAlert from './ErrorAlert'
import SuccessAlert from './SuccessAlert'

export default function FormContact() {
  const [msg, setMsg] = useState('')
  const [error, setError] = useState({ status: false, msg: '' })
  const form = useRef()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const response = await fetch('api/email', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      setMsg(data.msg)
      console.log(data)
    } catch (error: any) {
      console.log(error)
      setError({ status: true, msg: error?.msg })
    }
    form?.current?.reset()

    setTimeout(() => {
      setMsg('')
      setError({ status: false, msg: '' })
    }, 2000)

  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mt-6 p-6 mx-auto md:w-2/3 w-full border rounded-md border-gray-300/30 shadow-md shadow-blue-900 my-4 bg-blue-950'
        ref={form}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Escribe tu nombre</label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full p-1 rounded-md bg-blue-900/40'
            placeholder='Nombre y apellido'
            required
          />
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <label htmlFor='email'>Dime tu email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full p-1 rounded-md bg-blue-900/40'
            placeholder='correo@correo.com'
            required
          />
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <label htmlFor='description'>Describe tu consulta</label>
          <textarea
            name='description'
            id='description'
            cols={30}
            rows={10}
            placeholder='Escribe aquí tu consulta'
            className='w-full p-1 rounded-md bg-blue-900/40'
            required></textarea>
        </div>
        <button
          type='submit'
          className='g-recaptcha border border-blue-200 text-blue-200 font-bold uppercase rounded-md mt-4 p-2 hover:text-blue-300 hover:border-blue-300 hover:scale-105 transition-all'
        >Enviar consulta</button>
      </form>
      {error.status && <ErrorAlert msg={error.msg} />}
      {msg.length > 0 && <SuccessAlert msg={msg} />}
    </>
  )
}

