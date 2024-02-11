interface Contact {
  id: number;
  name: string;
};

/**
 * Generics
 */
function clone<T>(source: T): T {
  return Object.assign({}, source);
};

const a: Contact = { id: 123, name: 'John Doe' };
const b: Contact = clone(a);


/**
 * Passing function as an argument
 */
function test(val: number, handler: (arg3: number) => string): string {
  return '';
};

test(2, function (num: number)  {
  return `${num}`;
});
