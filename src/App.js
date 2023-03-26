import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//COMPONENTS
import Herosection from './components/Herosection/Herosection';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Fields from './components/Listsection/Fields';

//CONTEXTS
import { SearchContext, search, setSearch } from './Contexts/SearchContext';
import Fieldinfo from './components/Fieldinfosection/Fieldinfo';
import Login from './components/Loginsection/Login';
import Register from "./components/Register/Register"


function App() {

  const [search, setSearch] = useState()

  return (
    <>
      <Navbar />
      <SearchContext.Provider value={{search, setSearch}}>
          <Routes>
            <Route path='/' element={<Herosection setSearch={setSearch} />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path={`/Fields`} element={<Fields search={search} />} />
            <Route path='/Fields/:id' element={<Fieldinfo />} />
          </Routes>
      </SearchContext.Provider>
      <Footer />
    </>
  );
}

export default App;
