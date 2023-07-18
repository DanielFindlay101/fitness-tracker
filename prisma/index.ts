import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allWorkouts = await prisma.workouts.findMany();
  console.log(allWorkouts);
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
