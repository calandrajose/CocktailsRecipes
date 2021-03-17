
import Header from './components/Header'
import Form from './components/Form'
import Cocktails from './components/Cocktails/Cocktails'
import CategoriesProvider from './context/CategoriesContext'
import ParamsProvider from './context/RecipesContext'
import ModalProvider from './context/ModalContext'


function App() {

  return (
    <CategoriesProvider>
      <ModalProvider>
        <ParamsProvider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Form />
            </div>
            <Cocktails />
          </div>
        </ParamsProvider>
      </ModalProvider>
    </CategoriesProvider>
  );
}

export default App;
