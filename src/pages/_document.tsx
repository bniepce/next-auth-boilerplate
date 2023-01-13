import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css" />
      </Head>
      <body>
        <Main />
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" async/> 
        <NextScript />
      </body>
    </Html>
  )
}
