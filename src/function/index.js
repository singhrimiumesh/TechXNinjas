/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Azion Greeting</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #009B3A;
          position: relative;
          overflow: hidden;
        }
        
        /* Brazil Flag Shape */
        .flag {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .diamond {
          width: 70%;
          height: 70%;
          background: #FFCC29;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .circle {
          width: 30%;
          height: 30%;
          background: #002776;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Content Box */
        .container {
          position: relative;
          max-width: 600px;
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          line-height: 1.6;
          z-index: 10;
        }
        h1 {
          font-size: 1.8em;
          color: #009B3A;
        }
        p {
          font-size: 1.1em;
          color: #555;
        }
        .highlight {
          font-weight: bold;
          color: #002776;
        }
      </style>
    </head>
    <body>
      <!-- Brazil Flag Background -->
      <div class="flag">
        <div class="diamond">
          <div class="circle"></div>
        </div>
      </div>

      <!-- Message Content -->
      <div class="container">
        <h1>Olá Azion Brazil! 🌞</h1>
        <p>Rimi here from <span class="highlight">India</span>. I just discovered your incredible work in edge computing, and I’m excited to learn more! 💻✨</p>
        <p>I’ve always admired <span class="highlight">Brazil</span> from afar, especially after studying about it in 10th grade 📚.</p>
        <p>Your stunning beaches 🏖️, legendary football ⚽️, and vibrant culture 🎉 have me dreaming of visiting someday!</p>
        <p>Keep up the amazing work—can’t wait to connect more! 🍹💃🎶💙</p>
      </div>
    </body>
    </html>
  `;

  return new Response(message, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
