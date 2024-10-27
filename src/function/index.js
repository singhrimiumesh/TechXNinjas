/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  const message = `Oi, Brasil! 🌞 Rimi here from India, just admiring all the wonders of your country from my screen 🌎✨ and wishing I could experience it in real life! I studied about Brazil back in 10th grade 📚, and it left me dreaming of your stunning beaches 🏖️, legendary football ⚽️, music 🎶 and amazing festas 🎉! Keep the vibes just as they are—I’ll be there someday! 🍹💃💙`;

  return new Response(message, {
    headers: {
      "content-type": "text/plain;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
