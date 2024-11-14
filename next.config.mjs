/* eslint-disable no-undef */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // 개발 환경에서는 PWA 비활성화
})({
  reactStrictMode: true,
  swcMinify: true,
});

export default nextConfig;
