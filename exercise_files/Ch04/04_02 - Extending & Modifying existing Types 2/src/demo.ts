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
  	name: string;
  	status: ContactStatus;
		address?: Address;
	}
 */
type ContactWithoutId = Omit<Contact, 'id'>;

/**
 * interface Contact {
  	name?: string;
  	status?: ContactStatus;
		address?: Address;
	}
 */
type LooseContactWithoutId = Omit<Partial<Contact>, 'id'>;

/**
 * interface Contact {
  	id: number;
  	address?: Address;
	}
 */
  type ContactWithOnlyIdAndAddress = Pick<Contact, 'id' | 'address'>;

/**
 * interface Contact {
  	id?: number;
  	name?: string;
	}
 */
type LooseContactWithOnlyNameAndId = Pick<Partial<Contact>, 'id' | 'name'>;
