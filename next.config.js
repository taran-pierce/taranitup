// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/_next/:js*',
//         locale: false,
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=9999999999, must-revalidate',
//           }
//         ],
//       },
//       {
//         source: '/:all*(svg|jpg|png)',
//         locale: false,
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=9999999999, must-revalidate',
//           }
//         ],
//       },
//     ];
//   }
// }

// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/_next/:js*',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ];
  },
  distDir: 'out/',
}
 
module.exports = nextConfig;
