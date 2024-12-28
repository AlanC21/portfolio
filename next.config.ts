import type { NextConfig } from 'next';

interface SassLoggerOptions {
  warn: (message: string) => void;
}

const nextConfig: NextConfig = {
  sassOptions: {
    logger: {
      warn: function (message: string): void {
        if (message.includes('The legacy JS API is deprecated')) return;
        console.warn(message);
      }
    } as SassLoggerOptions
  } as unknown as Record<string, unknown>,
  reactStrictMode: true,
}

export default nextConfig;