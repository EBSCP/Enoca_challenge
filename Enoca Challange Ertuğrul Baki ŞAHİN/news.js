const apiKey = '249050bdbfa541f1ae336c1377d352cd';
const apiUrl = 'https://newsapi.org/v2/everything?q=bitcoin';

fetch(`${apiUrl}&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.status === 'ok') {
      const articles = data.articles;
      const newsContainer = document.querySelector('.news-container');

      for (const article of articles) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const link = document.createElement('a');

        title.textContent = article.title;
        description.textContent = article.description;
        link.textContent = 'Read more';
        link.href = article.url;

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(link);

        newsContainer.appendChild(newsItem);
      }
    } else {
      console.error('Error fetching news data');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
