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
 * Following is a Decorator Factory which accepts custom argument unlike
 * plain Decorators.
 */
function authorize(role: string) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    const wrapped = descriptor.value
  
    descriptor.value = function () {
      if (!(currentUser.isAuthenticated() &&
          currentUser.isInRole(role))) {
        throw Error('User not authorized to execute this action');
      }
  
      return wrapped.apply(this, arguments);
    }
  }
}

class ContactRepository {
  private contacts: Contact[] = [];

  @authorize('ContactViewer')
  public getContactById(id: number): Contact | null {
    const contact = this.contacts.find(x => x.id === id);
    return contact;
  }

  @authorize('ContactEditor')
  public save(contact: Contact): void {
    const existing = this.getContactById(contact.id);
    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}