import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'

import Root from './components/Root'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Welcome from './pages/Welcome/Welcome'
import About from './pages/About/About'
import Lists from './pages/Lists/Lists'
import List from './pages/Lists/List'
import TaskPage from './pages/Tasks/TaskPage'
import AdminArea from './components/AdminArea/AdminArea'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Welcome/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<AdminArea/>}/>
      <Route path='/lists' loader={listLoader} element={<Lists/>}/>
      <Route path='/lists/:listId' loader={listLoader} element={<List/>}/>
      <Route path='/lists/:listId/task/:taskId' loader={detailsLoader} element={<TaskPage/>}/>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
async function listLoader({params, request}){
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";
    let apiURL = 'https://jsonplaceholder.typicode.com/todos';
    if (params.listId) {
      apiURL += `?userId=${params.listId}`;
    }

    const response = await fetch(apiURL);
    if(!response.ok){
      throw new Error("Error loading API", {status: response.status});
    }
    let todoLists = await response.json();
    if(query){
      todoLists = todoLists.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
    }
    
    if(params.listId){
      return {
        userId: params.listId,
        tasks: todoLists
      };
    }
    return todoLists;
  
}
async function detailsLoader({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.taskId}`);
  if (!response.ok) {
    throw new Error("Error loading API", { status: response.status });
  }

  return response.json();
}
