import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Solpaper Store</title>
      <meta name="title" content="Solpaper Store" />
      <meta name="description" content="Buy solpapers(wallpapers) using Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://buildspace.so/" />
      <meta property="og:title" content="Solpaper Store" />
      <meta property="og:description" content="Buy solpapers(wallpapers) using Solana Pay!" />
      <meta property="og:image" content="https://cdn.buildspace.so/courses/solana-pay/metadata.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://buildspace.so/" />
      <meta property="twitter:title" content="Solpaper Store" />
      <meta property="twitter:description" content="Buy solpapers(wallpapers) using Solana Pay!" />
      <meta property="twitter:image" content="https://cdn.buildspace.so/courses/solana-pay/metadata.png" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </Head>
  );
}
