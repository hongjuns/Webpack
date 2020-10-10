import 'normalize.css'
import style from './index.css';
import $ from 'jquery';
import slackImg from './assets/slack.png';

function component() {
    const element = document.createElement('div');
    const imgelement = document.createElement('img');
    // Lodash, currently included via a script, is required for this line to work
    //console.log(style.hellowepack);
    imgelement.src=slackImg
    element.append(imgelement);
    element.classList = style.hellowepack;

    return element;
  }
  
  document.body.appendChild(component());
  console.log($(`.${style.hellowepack}`).length);
