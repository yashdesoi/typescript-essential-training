type ContactName = string;
type ContactStatus = 'active' | 'inactive' | 'new';
type ContactBirthDate = Date | number | string;

interface Contact  {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
};

/**
 * We can only use keyof operator before interfaces or (typeof {SOME OBJECT}).
 * Following is equivalent to
 * type ContactField = 'id' | 'name' | 'birthDate' | 'status';
 */
type ContactField = keyof Contact;

let primaryContact: Contact = {
  id: 12345,
  name: 'Jamie Johnson',
  status: 'active'
};

/**
 * Type 1
 */
function getValue<T>(source: T, propertyName: keyof T): any {
  return source[propertyName];
};

getValue(primaryContact, 'name');
getValue({ min: 2, max: 5 }, 'max');

/**
 * Type 2
 */
function getVal<T, U extends keyof T>(source: T, propertyName: U): any {
  return source[propertyName];
}

getVal(primaryContact, 'birthDate');
getVal({ min: 6, max: 17 }, 'min');
