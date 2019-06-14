import { uniq } from 'lodash';
import insane  from 'insane';
import jsonp from 'jsonp';
import {apiKey as key, url, sayHi, age, dog } from './src/config';

 import User, {createURL, gravatar} from './src/user';


const wes = new User('wes bos', 'wes@email.com', 'wesbos.com');
//console.log(wes);
const profile = createURL(wes.name);
console.log(profile);
const image = gravatar(wes.email);
console.log(image);

//* console.log(key, url);
//* sayHi('wes');

//* const ages = [1,1111,4,42,12,7, 99];

// console.log(uniq(ages));
