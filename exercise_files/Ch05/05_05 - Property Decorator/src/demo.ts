interface Contact {
  id: number;
}

const currentUser = {
  id: 1234,
  roles: ['ContactEditor'],
  isAuthenticated(): boolean {
    return true
  },
  isInRole(role: string): boolean {
    return this.roles.contains(role);
  }
}

function auditable(target: object, key: string | symbol) {
  // get the initial value, before the decorator is applied
  let val = target[key];

  // then overwrite the property with a custom getter and setter
  Object.defineProperty(target, key, {
    get: () => val,
    set: (newVal) => {
      console.log(`${key.toString()} changed: `, newVal);
      val = newVal;
    },
    enumerable: true,
    configurable: true
  })
}

class ContactRepository {

  @auditable
  private contacts: Contact[] = [];

  getContactById(id: number): Contact | null {
    const contact = this.contacts.find(x => x.id === id);
    return contact;
  }

  save(contact: Contact): void {
    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}
