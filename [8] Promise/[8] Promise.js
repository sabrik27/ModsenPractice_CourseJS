function fetchUrls(urls) {
  const promises = urls.map(url => fetch(url).then(response => response.text()));

  return Promise.all(promises)
    .then(contents => contents)
    .catch(error => {
      console.error('Error fetching URLs:', error);
      return [];
    });
}
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3'
];

fetchUrls(urls)
  .then(contents => {
    console.log('Contents:', contents);
  })
  .catch(error => {
    console.error('Error:', error);
  });
