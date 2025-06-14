import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

// PUBLIC_INTERFACE
function App() {
  // Render the SimpleRecipeManager main container instead of the original template
  return <MainContainer />;
}

export default App;