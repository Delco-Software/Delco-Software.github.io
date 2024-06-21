import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;