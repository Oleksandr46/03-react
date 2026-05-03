import { useState } from 'react';
import type { Article } from '../../types/article';
import ArticleList from '../ArticleList/ArticleList';
import SearchForm from '../SearchForm/SearchForm';
import { fetchArticles } from '../services/articleService';




export default function App() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // 1. Оголошуємо стан
    const [isError, setIsError] = useState(false);

    const handleSearch = async (topic: string) => {
        // 2. Додаємо блок try...catch
        try {
            setIsLoading(true)
             // 3. Скидаємо стан помилки в false перед кожним запитом
            setIsError(false)
            setArticles([]);
            const data = await fetchArticles(topic);
            setArticles(data)
        } catch {
            // 4. Встановлюємо стан isError в true
            setIsError(true);
        } finally {
            // 5. Встановлюємо стан isLoading в false
      // після будь якого результату запиту
            setIsLoading(false);
        }
  };

  return (
    <div>
          <SearchForm onSubmit={handleSearch} />
          {isLoading && <p>Loading data, please wait ...</p>}
          {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
