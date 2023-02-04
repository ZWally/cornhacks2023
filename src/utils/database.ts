import App from '../Types/App';
import AppUser from '../Types/AppUser';
import Permission from '../Types/Permission';
import Role from '../Types/Role';
import SiteUser from '../Types/SiteUser';
import { db } from "./firebase";
import { doc, getDoc } from 'firebase/firestore';

export async function getAppUserbyId(appUserId: string): Promise<AppUser | null> {
  return new Promise<AppUser | null>(async (resolve, reject) => {
    const docRef = await getDoc(doc(db, 'appUsers', appUserId));

    if (!docRef.exists()) {
      return reject(null);
    }
    
    const docData = docRef.data()

    const appUser: AppUser = {
      id: docRef.id,
      roleId: docData['roleId'],
      authId: docData['authId'],
    }

    return resolve(appUser);
  });
}

export async function createAppUser(roleId: string, authId: string): Promise<AppUser | null> {
  return new Promise<AppUser | null>(async (resolve, reject) => {

  });
}

export async function getAppById(appId: string): Promise<App | null> {
  return new Promise<App | null>(async (resolve, reject) => {

  });
}

export async function createApp(userIds: string [], roleIds: string [], permissionIds: string []): Promise<App | null> {
  return new Promise<App | null>(async (resolve, reject) => {

  });
}

export async function getPermissionById(permissionId: string): Promise<Permission | null> {
  return new Promise<Permission | null>(async (resolve, reject) => {

  });
}

export async function createPermission(name: string): Promise<Permission | null> {
  return new Promise<Permission | null>(async (resolve, reject) => {

  });
}

export async function getRoleById(roleId: string): Promise<Role | null> {
  return new Promise<Role | null>(async (resolve, reject) => {

  });
}

export async function createRole(name: string, permissionIds: string []): Promise<Role | null> {
  return new Promise<Role | null>(async (resolve, reject) => {

  });
}

export async function getSiteUserById(siteId: string): Promise<SiteUser | null> {
  return new Promise<SiteUser | null>(async (resolve, reject) => {

  });
}



