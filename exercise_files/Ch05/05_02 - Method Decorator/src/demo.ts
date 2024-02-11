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
 * Following is plain Decorator.
 */
function authenticate(target: any, property: string, descriptor: PropertyDescriptor) {
  const wrapped = descriptor.value

  descriptor.value = function () {
    if (!currentUser.isAuthenticated()) {
      throw Error('User is not authenticated');
    }
    return wrapped.apply(this, arguments);
  }
}

class ContactRepository {
  private contacts: Contact[] = [];

  @authenticate
  public getContactById(id: number): Contact | null {
    if (!currentUser.isInRole('ContactViewer')) {
      throw Error('User not authorized to execute this action');
    }

    const contact = this.contacts.find(x => x.id === id);
    return contact;
  }

  @authenticate
  public save(contact: Contact): void {
    if (!currentUser.isInRole('ContactEditor')) {
      throw Error('User not authorized to execute this action');
    }
    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}
