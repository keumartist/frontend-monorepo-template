const fs = require('fs');

// JSON 파일 경로
const jsonFile = './lighthouse-results/manifest.json';

// JSON 파일 읽기
fs.readFile(jsonFile, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Failed to read JSON file: ${jsonFile}`);
    console.error(err);
    return;
  }

  // summary 항목 추출
  const results = JSON.parse(data);
  const summaries = results.map((result) => ({
    url: result.url,
    summary: result.summary,
  }));

  // 출력할 summary 항목 목록
  const keys = ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'];

  // summary 항목 출력
  console.log('Summary:');
  summaries.forEach((summary, index) => {
    console.log(`- ${index + 1}회 측정 결과`);
    keys.forEach((key) => {
      const value = summary.summary[key];
      console.log(`  - ${key}: ${value}`);
    });
  });
});
