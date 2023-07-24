import React from 'react';
import './App.css';
import LayOut from "./components/LayOut/LayOut";
import {Route, Routes} from "react-router-dom";
import AddForm from "./containers/Forms/AddForm";

const App = () => {

  return (
      <>
          <LayOut>
              <Routes>
                  <Route path="/" element={(
                      <h1>HOME!</h1>
                  )} />
                  <Route path="/new-contact" element={(
                      <AddForm />
                  )} />
              </Routes>
          </LayOut>
      </>
  );
};

export default App;
