import { useState } from 'react';
import type { Article } from '../../types/article';
import ArticleList from '../ArticleList/ArticleList';
import SearchForm from '../SearchForm/SearchForm';
import { fetchArticles } from "../../services/ArticleService";




export default function App() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLonding, setIsLonding] = useState(false);
    // 1. Оголошуємо стан
    const [isError, setIsError] = useState(false);

    const handleSearch = async (topic: string) => {
        // 2. Додаємо блок try...catch
        try {
            setIsLonding(true)
             // 3. Скидаємо стан помилки в false перед кожним запитом
            setIsError(false)
            const data = await fetchArticles(topic);
            setArticles(data)
        } catch {
            // 4. Встановлюємо стан isError в true
            setIsError(true);
        } finally {
            // 5. Встановлюємо стан isLoading в false
      // після будь якого результату запиту
            setIsLonding(false);
        }
  };

  return (
    <div>
          <SearchForm onSubmit={handleSearch} />
          {isLonding && <p>Lopding data, please wait ...</p>}
          {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
