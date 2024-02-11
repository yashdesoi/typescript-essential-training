// More about generics

interface Contact {
  id: number;
  name: string;
}

interface UserContact<TExternalId> extends Contact {
  username: string,
  externalId: TExternalId
}

export function merge<T1 extends Object, T2 extends T1>(target: T1, source: T2): T1 {
  for (let key in target) {
  if (target.hasOwnProperty(key) && source.hasOwnProperty(key)) {
    target[key] = source[key];
  }
  }
  return target;
}

const a: Contact = {
  id: 123,
  name: 'John Doe'
};
const b: UserContact<number> = {
  id: 456,
  name: 'Bruce Wayne',
  username: 'bwayne',
  externalId: 789
}
const c = merge<Contact, UserContact<number>>(a, b);