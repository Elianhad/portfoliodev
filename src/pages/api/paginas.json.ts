import type { APIRoute } from 'astro'
import { paginas } from '../../data/data'


export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify(paginas)
  )
}
