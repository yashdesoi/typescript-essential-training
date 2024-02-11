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

/**
 * Class decorator decorates the constructor of that class on which it is applied.
 */
function freeze(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

function salutation(text: string) {

  // Ignore this type for now
  return function<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class Extended extends constructor {
      constructor(...args) {
        super(args);
      }
  
      public echo(): void {
        console.log(text);
      }
    }
  }
}

@salutation('Hello World!')
class ContactRepository {
  private contacts: Contact[] = [];

  /**
   * Like this
   */
  // @freeze
  // constructor() {}

  public getContactById(id: number): Contact | null {
    const contact = this.contacts.find(x => x.id === id);
    return contact;
  }

  public save(contact: Contact): void {
    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}

const cr = new ContactRepository();

// @ts-ignore
cr.echo(); // Prints Hello World!
