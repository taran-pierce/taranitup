module.exports = {
  async headers() {
    return [
      {
        source: '/_next/:js*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=31536000', // Matched parameters can be used in the value
          },
          {
            key: 'minimumCacheTTL',
            value: '31536000', // Matched parameters can be used in the value
          },
        ],
      },
    ];
  }
}