type ContactName = string;

/**
 * Replacting Enumerates with type alias and union
 */
type ContactStatus = 'active' | 'inactive' | 'new';

type ContactBirthDate = number | string | Date;

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

/**
 * Following is similar to:-
 * 
 * `interface Contact extends Address {
 * id: number;
 * name: ContactName;
 * birthDate?: ContactBirthDate;
 * status?: ContactStatus;
 * }
 * 
 * But it is whole different interface so that we don't need
 * to interfere Contact which already exists.
 */
interface AddressableContact1 extends Contact, Address {};

/**
 * Following is exactly similar to AddressableContact1
 */
type AddressableContact2 = Contact & Address;

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === 'number') {
    return new Date(contact.birthDate);
  }
  else if (typeof contact.birthDate === 'string') {
    return Date.parse(contact.birthDate)
  }
  else {
    return contact.birthDate
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: 'Jamie Johnson',
  status: 'active'
}
