/** @type {import('next').NextConfig} */
const nextConfig = {
   images: { // we configue which sources the Image component is allowed to use
      remotePatterns: [
        {
          protocol: 'https', // allow this protocol
          hostname: 'dkstatics-public.digikala.com', // we allow only this the hostname
          port: '', // this is left empty for standard HTTPS
          pathname: '/**', // we allow all paths under the hostname
        },
        {
          protocol: 'https', // allow this protocol
          hostname: 'images.samsung.com', // we allow only this the hostname
          port: '', // this is left empty for standard HTTPS
          pathname: '/**', // we allow all paths under the hostname
        }
      ],
   },
};

export default nextConfig;
