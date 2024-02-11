/*
Following are examples of pure JavaScript typeof operator
*/
const x = 'string';
const y = true;
console.log(typeof x); // --> 'string'
console.log(typeof y); // --> 'boolean'

function toContact(nameOrContact) {
  if (typeof nameOrContact === 'object') {
    return {
      id: nameOrContact.id,
      name: nameOrContact.name,
      status: nameOrContact.status
    }
  }
  else {
    return {
      id: 0,
      name: nameOrContact,
      status: 'active'
    }
  }
};

/*
But we can also use typeof operator in typescript to infer types, for example
 */
const baseLimit = {
  min: 5,
  max: 8
};

type Limit = typeof baseLimit;

const limit: Limit = {
  max: 25,
	min: 11
};
