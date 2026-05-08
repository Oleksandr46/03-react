import { useEffect, useState } from 'react';
// import type { Article } from '../../types/article';
// import ArticleList from '../ArticleList/ArticleList';
// import SearchForm from '../SearchForm/SearchForm';
// import { fetchArticles } from '../../services/articleService';
// import OrderForm from '../OrderForm/OrderForm';
// import axios from 'axios';
// import Timer from '../Timer/Timer';

// import Modal from "../Modal/Modal";



// export default function App() {
    // const [count, setCount] = useState(1);
    // const [clicks, setClicks] = useState(1);
    // const [person, setPerson] = useState(null);
    // useEffect(() => {
    //     console.log("Effect ran!");
    //     console.log("Clicks updated:", count);
    //     useEffect(() => {
    //         async function fetchCharacter() {
    //             // You can await here
    //             const response = await axios.get(`https://swapi.info/api/people/${clicks}`);
    //             setPerson(response.data);
    //         }
    // // ...
    //   fetchCharacter();
    // }, [clicks]);
    // console.log('App rendred!');
//     useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);
    
    // useEffect(() => {
    //     console.log("Clicks updated:", clicks);
    // }, [clicks]);
// return (
//     <>
//         {/* <h2>The count is {count}</h2>
//         {/* <button onClick={() => setCount(count + 1)}>Get next character</button> */}
//         {/* <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button> */}
        
//         {/* <pre>{JSON.stringify(person, null, 2)}</pre> */} */}
// </>
// );
//==========================================================================
//     const [articles, setArticles] = useState<Article[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     // 1. Оголошуємо стан
//     const [isError, setIsError] = useState(false);

//     const handleSearch = async (topic: string) => {
//         // 2. Додаємо блок try...catch
//         try {
//             setIsLoading(true)
//              // 3. Скидаємо стан помилки в false перед кожним запитом
//             setIsError(false)
//             setArticles([]);
//             const data = await fetchArticles(topic);
//             setArticles(data)
//         } catch {
//             // 4. Встановлюємо стан isError в true
//             setIsError(true);
//         } finally {
//             // 5. Встановлюємо стан isLoading в false
//       // після будь якого результату запиту
//             setIsLoading(false);
//         }
//   };

//   return (
//     <div>
//           <SearchForm onSubmit={handleSearch} />
//           {isLoading && <p>Loading data, please wait ...</p>}
//           {isError && <p>Whoops, something went wrong! Please try again!</p>}
//           {articles.length > 0 && <ArticleList items={articles} />}
//           <OrderForm/>
//     </div>
//       );
//========================================================================================
// }


// export default function App() {
//     const [count, setCount] = useState(0);
//     // const [isOpen, setIsOpen] = useState(false);
//     useEffect(() => {
//         console.log(`Effect ran for: ${count}`);
//         // Повертаємо функцію очищення ефекта
//         return () => {
//             console.log(`Clean up for ${count}`);
//         };
//     }, [count])
//   return (
//       <>
//           <button onClick={()=> setCount(count + 1)}>Count is {count}</button>
//     </>
//   );
// }
//========================================================================================

// export default function App() {
//     const [isOpen, setIsOpen] = useState(false);
    
//   return (
//       <>
//           <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? `Hide timer` : `Show timer`}</button>
//           {isOpen && <Timer />}</>
//   );
// }
//========================================================================================
// export default function App() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//   return (
//       <div>
//           <h1>Main content of the page</h1>
//           <button onClick={openModal}>Open modal</button>
//           {isModalOpen && <Modal onClose={closeModal}>
//             <h2>Custom Modal Content</h2>
//               <p>This is a reusable modal with dynamic content.</p>
//           </Modal>}
          
          
//       </div>
//   );
// }
//========================================================================================

export default function App() {
    const [clicks, setClicks] = useState(() => {
        console.log("Initializer ran");
        const saveClicks = localStorage.getItem("saveClicks");
        	// Якщо там щось є, повертаємо це
        // значення як початкове значення стану
        if (saveClicks !== null) {
            return JSON.parse(saveClicks)
        }
        
	// У протилежному випадку повертаємо
        // яке-небудь значення за замовчуванням
        return 0;
    });
    useEffect(() => {
        localStorage.setItem("saveClicks", JSON.stringify(clicks))
    }, [clicks])
  return (
      <div>
          <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
          <button onClick={()=> setClicks(0)}>Reset</button>
      </div>
  );
}
//========================================================================================
// export default function App() {
//     const [clicks, setClicks] = useState(0);
//     // 1. Тільки один раз після монтування
//     useEffect(() => {
//         console.log("You can see me only once!");
//     }, [])
//      // 2. Кожного разу, коли змінюється clicks
//     useEffect(() => {
//         console.log("Clicks updated:", clicks);
//     }, [clicks])
//      // 3. При кожному рендері (бо без залежностей)
//     useEffect(() => {
//         document.title = `You clicked ${clicks} times`
//     });
//   return (
//       <button onClick={()=> setClicks(clicks +1)}>You clicks {clicks} times</button>
//   );
// }
//========================================================================================


// export default function App() {
//     const [first, setFirst] = useState(0);
//     const [second, setSecond] = useState(0);

//     useEffect(() => {
//         console.log("First updated:", first);
//     }, [first])

//    useEffect(() => {
//         console.log("Second updated:", second);
//    }, [second]) 
    
//    useEffect(() => {
//         console.log("First or second updated:", first + second);
//    }, [first, second]) 
    
//     return (
//         <>
//          <button onClick={() => setFirst(first + 1)}>First {first}</button>
//       <button onClick={()=> setSecond(second +1)}>Second {second}</button></>
     
      
//   );
// }
//========================================================================================
