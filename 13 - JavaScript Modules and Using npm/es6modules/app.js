import { uniq } from 'lodash';
import insane  from 'insane';
import jsonp from 'jsonp';
import {apiKey, url, sayHi, age, dog } from './src/config';
console.log(apiKey, url);

sayHi('wes');

const ages = [1,1111,4,42,12,7, 99];

console.log(uniq(ages));

