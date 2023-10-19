export async function POST({ request }) {
  console.log('llama a api')  
  const data = await request.json()
  const recaptchaURL = 'https://www.google.com/recaptcha/api/eehdev.netlify.app'
  const requestBody = {
    secret: import.meta.env.SERVER_CAPTCHA,
    response: data.recaptcha
  }
  const response = await fetch(recaptchaURL, {
    method: 'POST',
    body: JSON.stringify(requestBody)
  })
  const responseData = await response.json()
  return new Response(JSON.stringify(responseData), { status: 200 })
}
