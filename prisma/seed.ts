import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/modules/auth";
const prisma = new PrismaClient();

async function main() {
  const testUserA = await prisma.user.upsert({
    where: { username: process.env.TEST_USER_A_NAME },
    update: {},
    create: {
      username: process.env.TEST_USER_A_NAME,
      password: await hashPassword(process.env.TEST_USER_A_PASSWORD),
      content: {
        create: {
          title: process.env.TEST_CONTENT_TITLE,
          text: process.env.TEST_CONTENT_TEXT,
        },
      },
    },
  });

  const testUserB = await prisma.user.upsert({
    where: { username: process.env.TEST_USER_B_NAME },
    update: {},
    create: {
      username: process.env.TEST_USER_B_NAME,
      password: await hashPassword(process.env.TEST_USER_B_PASSWORD),
      content: {
        create: [
          {
            title: process.env.TEST_CONTENT_TITLE,
            text: process.env.TEST_CONTENT_TEXT,
          },
          {
            title: process.env.TEST_CONTENT_TITLE,
            text: process.env.TEST_CONTENT_TEXT,
          },
        ],
      },
    },
  });

  console.log({ testUserA, testUserB });
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
