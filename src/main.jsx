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
import data from './data/tasks.json'
import AdminArea from './components/AdminArea/AdminArea'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Welcome/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<AdminArea/>}/>
      <Route path='/lists' element={<Lists/>}/>
      <Route path='/lists/:listId' loader={listLoader} element={<List/>}/>
      <Route path='/lists/:listId/task/:taskId' loader={taskLoader} element={<TaskPage/>}/>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
function listLoader({params}){
  const list = data.Lists.find(l => l.listId === params.listId)
  return list;
}
function taskLoader({params}){
  const list = data.Lists.find(l => l.listId === params.listId)
  const task = list.tasks.find(t => t.taskId === params.taskId);
  return task;
}
