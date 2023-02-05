import App from '../Types/App';
import AppUser from '../Types/AppUser';
import Permission from '../Types/Permission';
import Role from '../Types/Role';
import SiteUser from '../Types/SiteUser';
import { db } from "./firebase";
import { doc, DocumentData, getDoc, QueryDocumentSnapshot, addDoc, updateDoc } from 'firebase/firestore';
import { collection as firebase_collection } from 'firebase/firestore';

function getObjectFromDocRef(docRef: QueryDocumentSnapshot<DocumentData>) {
  return { id: docRef.id, ...docRef.data() };
}

/**
 * Gets a document object in the specified collection with the given document id. 
 * @param collection Collection to read from
 * @param id Document ID
 * @returns An object representing the created document + the document id.
 */
async function getObjectFromCollectionById(collection: string, id: string) {
  return new Promise(async (resolve, reject) => {
    const docRef = await getDoc(doc(db, collection, id));

    if (!docRef.exists()) {
      return reject();
    }
    
    return resolve(getObjectFromDocRef(docRef));
  });
}

/**
 * Returns a list of objects (App, AppUser, Permission) that have been obtained 
 * by their respective database ids. 
 * @param ids Document IDs of objects to obtain.
 * @param getter Getter function for fetching those specific objects 
 * @returns Object list 
 */
async function getObjectsById<T>(ids: string [], getter: (id: string) => Promise<T>): Promise<T []> {
  return new Promise<T []>(async (resolve, reject) => {
    Promise.all(ids.map(getter)).then(objects => {
      resolve(objects);
    }).catch(reject);
  })
}

/**
 * Creates a document in the database in the specified collection using the
 * passed object. 
 * @param collection Collection to write to
 * @param object Object that will become the document
 * @returns An object representing the created document + the document id
 */
async function createObjectInDatabase(collection: string, object: object) {
  return new Promise(async (resolve, reject) => {
    addDoc(firebase_collection(db, collection), object).then(docRef => {
      return resolve({ id: docRef.id, ...object })
    }).catch(reject);
  })
}

/**
 * Updates the specified document in the database with the given object. 
 * @param collection Collection that the document belongs to
 * @param id Document ID
 * @param object Object containing properties to update
 * @returns A promise that will resolve upon successful update. Reject if not
 */
async function updateObjectInDatabase(collection: string, id: string, object: object) {
  return updateDoc(doc(db, collection, id), object);
}

/* AppUser CRUD */
export async function getAppUserById(appUserId: string): Promise<AppUser> {
  return getObjectFromCollectionById('appUsers', appUserId) as Promise<AppUser>;
}

export async function getAppUsersById(appUserIds: string []): Promise<AppUser []> {
  return getObjectsById(appUserIds, getAppUserById);
}

export async function createAppUser(roleId: string, authId: string): Promise<AppUser> {
  return createObjectInDatabase('appUsers', { roleId, authId }) as Promise<AppUser>;
}

export async function updateAppUser(appUser: AppUser) {
  return updateObjectInDatabase('appUsers', appUser.id, appUser);
}

/* App CRUD */
export async function getAppById(appId: string): Promise<App> {
  return getObjectFromCollectionById('apps', appId) as Promise<App>;
}

export async function getAppsById(appIds: string []): Promise<App []> {
  return getObjectsById(appIds, getAppById);
}

export async function createApp(userIds: string [], roleIds: string [], permissionIds: string []): Promise<App> {
  return createObjectInDatabase('apps', { userIds, roleIds, permissionIds }) as Promise<App>;
}

export async function updateApp(app: App) {
  return updateObjectInDatabase('apps', app.id, app);
}

/* Permission CRUD */
export async function getPermissionById(permissionId: string): Promise<Permission> {
  return getObjectFromCollectionById('permissions', permissionId) as Promise<Permission>;
}

export async function getPermissionsById(permissionIds: string []): Promise<Permission []> {
  return getObjectsById(permissionIds, getPermissionById);
}

export async function createPermission(name: string): Promise<Permission> {
  return createObjectInDatabase('permissions', { name }) as Promise<Permission>;
}

export async function updatePermission(permission: Permission) {
  return updateObjectInDatabase('permission', permission.id, permission);
}

/* Role CRUD */
export async function getRoleById(roleId: string): Promise<Role> {
  return getObjectFromCollectionById('roles', roleId) as Promise<Role>;
}

export async function getRolesById(roleIds: string []): Promise<Role []> {
  return getObjectsById(roleIds, getRoleById);
}

export async function createRole(name: string, permissionIds: string []): Promise<Role> {
  return createObjectInDatabase('roles', { name, permissionIds }) as Promise<Role>;
}

export async function updateRole(role: Role) {
  return updateObjectInDatabase('roles', role.id, role);
}

/* SiteUser CRUD */
export async function getSiteUserById(siteUserId: string): Promise<SiteUser> {
  return getObjectFromCollectionById('siteUsers', siteUserId) as Promise<SiteUser>;
}

export async function getSiteUsersById(siteUserIds: string []): Promise<SiteUser []> {
  return getObjectsById(siteUserIds, getSiteUserById);
}

export async function createSiteUser(name: string, email: string, appIds: string []): Promise<SiteUser> {
  return createObjectInDatabase('siteUsers', { name, email, appIds }) as Promise<SiteUser>;
}

export async function updateSiteUser(siteUser: SiteUser) {
  return updateObjectInDatabase('siteUsers', siteUser.id, siteUser);
}