let x: Record<string, string | number | boolean | Function> = { name: 'Wruce Bayne' };
x.id = 1234;
x.isActive = false;
x.greet = (target) => `Hello ${target}`;


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
  address?: Address;
}

/**
 * interface Contact {
  	id?: number;
  	name?: string;
  	status?: ContactStatus;
  	address?: Address;
	}
 */
type LooseContact = Partial<Contact>;

/**
 * interface Contact {
  	id: number;
  	name: string;
  	status: ContactStatus;
  	address: Address;
	}
 */
type ContactWithAllRequired = Required<Contact>;
