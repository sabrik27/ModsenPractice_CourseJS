async function fetchDataAndMakeRequest(url1, url2) {
  try {
    // Загрузка данных с первого сервера
    const response1 = await fetch(url1);
    const data1 = await response1.json();

    // Использование данных для запроса ко второму серверу
    const response2 = await fetch(`${url2}?param=${data1.value}`);
    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
fetchDataAndMakeRequest('https://api.example.com/data1', 'https://api.example.com/data2')
  .then(data => {
    console.log('Data from second server:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
