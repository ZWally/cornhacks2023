import App from '../Types/App';
import AppUser from '../Types/AppUser';
import Permission from '../Types/Permission';
import Role from '../Types/Role';
import SiteUser from '../Types/SiteUser';
import { db } from "./firebase";
import { doc, DocumentData, getDoc, QueryDocumentSnapshot } from 'firebase/firestore';

function getAppUserFromDocRef(docRef: QueryDocumentSnapshot<DocumentData>) {
    const docData = docRef.data()

    const appUser: AppUser = {
      id: docRef.id,
      roleId: docData['roleId'],
      authId: docData['authId'],
    }

    return appUser;
}

export async function getAppUserbyId(appUserId: string): Promise<AppUser> {
  return new Promise<AppUser>(async (resolve, reject) => {
    const docRef = await getDoc(doc(db, 'appUsers', appUserId));

    if (!docRef.exists()) {
      return reject();
    }
    
    return resolve(getAppUserFromDocRef(docRef));
  });
}

export async function getAppUsersById(appUserIds: string []): Promise<AppUser []> {
  return new Promise<AppUser []>(async (resolve, reject) => {
    Promise.all(appUserIds.map(getAppUserbyId)).then(appUsers => {
      resolve(appUsers)
    }).catch(reject);
  });
}

export async function createAppUser(roleId: string, authId: string): Promise<AppUser> {
  return new Promise<AppUser>(async (resolve, reject) => {

  });
}

export async function getAppById(appId: string): Promise<App> {
  return new Promise<App>(async (resolve, reject) => {

  });
}

export async function getAppsById(appIds: string []): Promise<App []> {
  return new Promise<App []>(async (resolve, reject) => {

  });
}

export async function createApp(userIds: string [], roleIds: string [], permissionIds: string []): Promise<App> {
  return new Promise<App>(async (resolve, reject) => {

  });
}

export async function getPermissionById(permissionId: string): Promise<Permission> {
  return new Promise<Permission>(async (resolve, reject) => {

  });
}

export async function getPermissionsById(permissionIds: string []): Promise<Permission []> {
  return new Promise<Permission []>(async (resolve, reject) => {

  });
}

export async function createPermission(name: string): Promise<Permission> {
  return new Promise<Permission>(async (resolve, reject) => {

  });
}

export async function getRoleById(roleId: string): Promise<Role> {
  return new Promise<Role>(async (resolve, reject) => {

  });
}

export async function getRolesById(roleIds: string []): Promise<Role []> {
  return new Promise<Role []>(async (resolve, reject) => {

  });
}

export async function createRole(name: string, permissionIds: string []): Promise<Role> {
  return new Promise<Role>(async (resolve, reject) => {

  });
}

export async function getSiteUserById(siteUserId: string): Promise<SiteUser> {
  return new Promise<SiteUser>(async (resolve, reject) => {

  });
}

export async function getSiteUsersById(siteUserIds: string): Promise<SiteUser []> {
  return new Promise<SiteUser []>(async (resolve, reject) => {

  });
}


