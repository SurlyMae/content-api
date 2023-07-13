# content-api
a CMS


## To use a postgres docker container:

```bash
$ docker run --name content-api-local -e POSTGRES_PASSWORD=1234 -p 5434:5432 postgres
```

## To run migrations:
```bash
$ npx prisma migrate dev
```

## To create migrations:
```bash
$ npx prisma migrate dev --name <name of your migration>
```