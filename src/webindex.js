import 'normalize.css'
import style from './index.css';
import $ from 'jquery';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //console.log(style.hellowepack);
    
    element.classList = style.hellowepack;

    return element;
  }
  
  document.body.appendChild(component());
  console.log($(`.${style.hellowepack}`).length);
