import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  return (
    <section className="container">
      <h2 className="mb-5">Fancy Buttons</h2>
      <div className="row">
        <div className="col">
          <h4 className="mb-3">Primary Button</h4>
          <p>This is a Primary Button</p>
          <Button text="Primary" />
        </div>
      </div>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
