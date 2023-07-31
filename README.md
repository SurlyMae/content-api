# content-api
a CMS


### to install dependencies and run server:
```bash
$ npm i
$ npm run dev
```

### to use a postgres docker container:
```bash
$ docker run --name content-api-local -e POSTGRES_PASSWORD=1234 -p 5434:5432 postgres
```

### to run migrations:
```bash
$ npx prisma migrate dev
```

### to create migrations:
```bash
$ npx prisma migrate dev --name <name of your migration>
```

### to sync db with code:
```bash
$ npx prisma db push
```

### to see the db ui:
```bash
$ npx prisma studio
```

### to create PrismaClient:
```bash
$ npx prisma generate
```
