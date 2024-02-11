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
  email: string;
}

type VisibleContactColumns = Record<keyof Contact, boolean>;

/**
 * VisibleContactColumns2 is similar to VisibleContactColumns, but in VisibleContactColumns2 we can get hold of generic 'K'
 */
type VisibleContactColumns2 = {
  [K in keyof Contact]: boolean;
};

const visibleContactColumns: VisibleContactColumns = {
  id: false,
  name: true,
  status: true,
  address: false,
  email: true
}
