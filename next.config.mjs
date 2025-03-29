/** @type {import('next').NextConfig} */
const nextConfig = {
   images: { // we configue which sources the Image component is allowed to use
      remotePatterns: [
        {
          protocol: 'https', // allow this protocol
          hostname: 'image-us.samsung.com', // we allow only this the hostname
          port: '', // this is left empty for standard HTTPS
          pathname: '/**', // we allow all paths under the hostname
        }
      ],
   },
};

export default nextConfig;
