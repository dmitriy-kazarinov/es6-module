import {Company,start} from './module1.js';
import {Ainstainer} from './module2.js';

let ain = new Ainstainer("Ainstainer","Ukraine");
console.log(ain.aboutString());

var div = document.getElementByid('about');
div.innerHTML = div.innerHTML + ain.aboutString();
