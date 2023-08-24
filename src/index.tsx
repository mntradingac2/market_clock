import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { render } from 'preact';
import { App } from './App';
const root = document.getElementById('root')!;
render(<App />, root);