/* import ReactDOM from 'react-dom';

import { Root } from './Root';

const container = document.getElementById('root');

ReactDOM.render(
  <Root />,
  container,
); */

import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Root/>);
