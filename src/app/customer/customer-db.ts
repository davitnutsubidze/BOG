export class CustomerDB {
  static initialize(evt) {
    let objectStore = evt.currentTarget.result.createObjectStore(
      'customer', { keyPath: "personalId" });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("lastName", "lastName", { unique: false });
    objectStore.createIndex("personalId", "personalId", { unique: true });
    objectStore.createIndex("gender", "gender", { unique: false });
    objectStore.createIndex("birthDate", "birthDate", { unique: false });
    objectStore.createIndex("maritalStatus", "maritalStatus", { unique: false });
    objectStore.createIndex("education", "education", { unique: false });
    objectStore.createIndex("contacts", "contacts", { unique: false });
    objectStore.createIndex("addresses", "addresses", { unique: false });
    objectStore.createIndex("products", "products", { unique: false });
  }
}
