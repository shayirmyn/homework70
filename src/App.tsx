import React from 'react';
import './App.css';
import LayOut from "./components/LayOut/LayOut";
import {Route, Routes} from "react-router-dom";
import AddForm from "./containers/Forms/AddForm";
import EditForm from "./containers/Forms/EditForm";
import Home from "./containers/Home/Home";

const App = () => {

  return (
      <>
          <LayOut>
              <Routes>
                  <Route path="/" element={(
                      <Home />
                  )} />
                  <Route path="/new-contact" element={(
                      <AddForm />
                  )} />
                  <Route path="/contacts/:id/edit" element={(
                      <EditForm />
                  )} />
              </Routes>
          </LayOut>
      </>
  );
};

export default App;
