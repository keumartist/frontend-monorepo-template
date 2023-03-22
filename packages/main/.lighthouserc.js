module.exports = {
  ci: {
    collect: {
      settings: {
        chromeFlags:
          '--disable-mobile-emulation --disable-network-throttling --headless --no-sandbox',
        disableStorageReset: true,
      },
      onlyCategories: ['performance', 'first-contentful-paint', 'interactive'],
      numberOfRuns: 2,
      staticDistDir: './out',
      url: ['http://localhost:3000/'], // 측정할 애플리케이션의 URL을 입력합니다.
    },
    assert: {
      assertions: {
        'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
        interactive: ['error', { maxNumericValue: 5000 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-results',
    },
  },
};
