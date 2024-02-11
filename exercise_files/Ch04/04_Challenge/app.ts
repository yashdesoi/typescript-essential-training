function query<T>(
  items: T[],
  query: {
    [K in keyof T]: (arg: T[K]) => boolean
  }
) {
  return items.filter(item => {
    // iterate through each of the item's properties
    for (const key of Object.keys(item)) {

      // get the query for this property name
      const propertyQuery = query[key]

      // see if this property value matches the query
      if (propertyQuery && propertyQuery(item[key])) {
        return true
      }
    }

    // nothing matched so return false
    return false
  })
}

const matches = query(
  [
    { name: 'Ted', age: 12 },
    { name: 'Angie', age: 31 }
  ],
  {
    name: name => name === 'Angie',
    age: age => age > 30
  })
