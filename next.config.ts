import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

export default function nextConfig(phase: string): NextConfig {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
    }
  }

  // Production config
  return {
    images: {
      loader: 'custom',
      loaderFile: './cfImageLoader.js'
    },
  }
}
