import type { APIRoute } from 'astro'
import { app } from '../../../firebase/server'
import { getFirestore } from 'firebase-admin/firestore'

const db = getFirestore(app)
export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData()
  const name = data.get('name')
  const email = data.get('email')
  const description = data.get('description')
  const createdAt = new Date().toString()
  if ([name, email, description].includes('')) {
    return new Response(
      JSON.stringify({
        msg: 'Todos los campos son requeridos'
      }),
      {
        status: 400
      }
    )
  }
  try {
    const emailRef = db.collection('emails')
    await emailRef.add({ name, email, description, createdAt })
    return new Response(JSON.stringify({ msg: 'Creado con éxito' }), {
      status: 200
    })
  } catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({ msg: 'Hubo un error, inténtelo nuevamente' }),
      { status: 500 }
    )
  }
}
