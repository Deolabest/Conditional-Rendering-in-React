import React, { useState } from 'react';
import './style.css';

// Loader component
function Loader() {
  return <div className="loader">
    <p>Loading...</p>
    </div>;
}

// Content component
function Content() {
  return (
    <div className="content">
      <p>
        The FormEvent interface is used for onSubmit events. You can access
        properties on the form element the event is attached to on the
        currentTarget property.
      </p>
    </div>
  );
}

// root component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Set a timeout
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return <section className="main-container">
    {isLoading ? <Loader /> : <Content />}
  </section>;
}

export default App;
