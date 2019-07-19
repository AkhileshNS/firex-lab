// External Modules
import Dexie from 'dexie';

const db = new Dexie("data");
db.version(1).stores({ projects: "++id, name" });

export default db;