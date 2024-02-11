interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

/**
 * Type alias --> Alternate name to any type
 */
type ContactName = string;

/**
 * Enumerable
 */
enum ContactStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  NEW = 'NEW',
}

/**
 * Following is similar to:-
 * interface Contact {
 * id: number;
 * name: string;
 * birthDate?: Date;
 * line1: string;
 * line2: string;
 * province: string;
 * region: string;
 * postalCode: string;
 * };
 */
interface Contact extends Address {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus;
  greet(name: string): string
};

const primaryContact: Contact = {
  id: 1234,
  name: 'John Doe',
  status: ContactStatus.NEW,
  greet: function(name: string) {
    return `Hello ${name}`
  },
  line1: '',
  line2: '',
  province: '',
  region: '',
  postalCode: '',
}
