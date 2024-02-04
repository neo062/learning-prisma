// require('dotenv').config()
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        }
    })
    console.log('res', res);
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log('res', res)
}

async function getUser(username: string) {
    const res = await prisma.user.findUnique({
        where: {
            email: username
        }
    })
    console.log('res>>', res)

}
async function getAllUser() {
    const res = await prisma.user.findMany()
    console.log('data>>', res);
}

async function deleteUser(username: string) {
    const res = await prisma.user.findFirst({
        where: { email: username }
    })
    console.log('res', res);
}
// insertUser("shravan@gmail.com", "pass@123", "Shravan", "Kumar")
// updateUser("navinkumar241999@gmail.com", { firstName: "Coder", lastName: "Navin" })
// getUser("navinkumar241999@gmail.com")
// getAllUser()
// deleteUser('navinkumar241999@gmail.com')