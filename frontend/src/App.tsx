import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { ProductsPage } from "./Pages/ProductsPage";
import { AdminPage } from "./Pages/AdminPage";
import { Provider } from "react-redux";
import { store } from './redux/store'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<ProductsPage/>}></Route>
    <Route path="/admin" element={<AdminPage/>}></Route>
  </>
));

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
