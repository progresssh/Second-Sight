import { escapeInject } from "vite-plugin-ssr"

export { render }

async function render() {
  return escapeInject`<html lang="en" class="h-full">
  <head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,100&display=swap"
    rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Second Sight</title>
  </head>
  <body class="h-full font-sans bg-[#232946]">
    <div id="react-root" class="h-full"></div>  
  </body>
</html>`
}
