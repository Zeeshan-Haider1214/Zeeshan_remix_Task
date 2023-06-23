import { prisma } from "./database.server";
import bcrypt from 'bcryptjs'

//for Signup Screen............................

export async function addUser(userData) {
  const hashPassword = await bcrypt.hash(userData.password, 10)
  try {
    return await prisma.Signup.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashPassword,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}  //end Signup...

//for Login Screen.............................

export async function userLoginAuth(userData) {
  console.log(userData)
  try {
    const loginAuth = await prisma.Signup.findFirst({
      where: {
        email: userData.email,
        password: userData.password,
      },
    });
    return loginAuth;
  } catch (error) {
    console.log(error);
    throw error;
  }
} //end login...
