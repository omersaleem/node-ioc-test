import Store from './services/Store';
import User from './models/User';
import {register, createInstance, Types, Errors as ContainerErrors} from './ioc-container';

register(Types.SERVICE, Store)
register(Types.MODEL, User);

const user1 = createInstance(Types.MODEL, User, {
  firstName: 'Omer',
  lastName: 'Saleem'
});
console.log(`Hello ${user1.fullName()}`);

const user2 = createInstance(Types.MODEL, User, {
  firstName: 'John',
  lastName: 'Smith'
});
console.log(`Hello ${user2.fullName()}`);
