/*
Type of key of an Interface can be accessed like how we access values of an object using keys.
*/
type ContactStatus = 'active' | 'inactive' | 'new';

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  address: Address;
}

interface Order {
  id: number;
  purchases: Map<string, number>;
  address: Address;
}

type ContactStreetName = Contact['address']['street'];

interface ContactEvent {
  contactId: Contact['id'];
}
