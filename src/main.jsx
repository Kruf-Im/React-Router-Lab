import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {store} from './store/store'
import './index.css'

import Root from './components/Root'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Welcome from './pages/Welcome/Welcome'
import About from './pages/About/About'
import Lists from './pages/Lists/Lists'
import List from './pages/Lists/List'
import TaskPage from './pages/Tasks/TaskPage'
import AdminArea from './pages/AdminArea/AdminArea'
import { Provider } from 'react-redux'
import Bin from './pages/Bin/Bin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Welcome/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<AdminArea/>}/>
      <Route path='/lists' loader={listLoader} element={<Lists/>}/>
      <Route path='/lists/:listId' loader={listLoader} element={<List/>}/>
      <Route path='/lists/:listId/task/:taskId' loader={detailsLoader} element={<TaskPage/>}/>
      <Route path='/bin' element={<Bin/>}/>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
async function listLoader({params, request}){
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";
    let apiURL = 'https://jsonplaceholder.typicode.com/todos';
    
    if (query){
      apiURL += `?title_like=${query}`
    }
    const response = await fetch(apiURL);
    if(!response.ok){
      throw new Error("Error loading API", {status: response.status});
    }
    let todoLists = await response.json();
        
    if(params.listId){
      const userTasks = todoLists.filter(task => task.userId === Number(params.listId))
      return {
        userId: params.listId,
        tasks: userTasks
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
