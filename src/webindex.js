import 'normalize.css'
import style from './index.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'hello Webpack';
    console.log(style.hellowepack);
    console.log(style);
    
    element.classList = style.hellowepack;

    return element;
  }
  
  document.body.appendChild(component());