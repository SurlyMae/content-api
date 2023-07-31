import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/modules/auth";
const prisma = new PrismaClient();

async function main() {
  const testUser = await prisma.user.upsert({
    where: { username: process.env.TEST_USER_NAME },
    update: {},
    create: {
      username: process.env.TEST_USER_NAME,
      password: await hashPassword(process.env.TEST_USER_PASSWORD),
      content: {
        create: {
          title: process.env.TEST_CONTENT_TITLE,
          text: process.env.TEST_CONTENT_TEXT,
        },
      },
    },
  });
  // const bob = await prisma.user.upsert({
  //   where: { email: "bob@prisma.io" },
  //   update: {},
  //   create: {
  //     email: "bob@prisma.io",
  //     name: "Bob",
  //     posts: {
  //       create: [
  //         {
  //           title: "Follow Prisma on Twitter",
  //           content: "https://twitter.com/prisma",
  //           published: true,
  //         },
  //         {
  //           title: "Follow Nexus on Twitter",
  //           content: "https://twitter.com/nexusgql",
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // });
  console.log({ testUser });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
