# Music API

NodeJS based backend to showcase how to use Drizzle ORM with TypeScript and a PostgreSQL database to keep track of:

- Albumns
- Songs
- Artists

## Relations

This API has the following relationships in the database:

- `Artist` 1..* `Albums`
- `Albums` 1..* `Songs`

> `1..*` means "One-to-Many". If you are not familiar with this concept, check out this [video](https://www.youtube.com/watch?v=xsg9BDiwiJE)

## Getting started

### Spin up the database

1. Install Docker on your machine
2. Open a Terminal window at the `/` root folder of the project
3. Run the following command:

```bash
docker compose up -d
```

This should start a `Postgres` database in your local with the details in the `docker-compose.yaml` file.

### Setup the DATABASE_URL

1. Make a copy of the `example.env` file at the `/` root folder.
2. Replace the placeholder values with the details you have in the `docker-compose.yaml`
3. Run the following command to run the database migrations:

```bash
pnpm generate
```

### Install dependencies

```bash
pnpm install
```

### Start the server

```bash
pnpm dev
```

## Trying it out

After you have setup the project on your local machine, download Postman and head over to [this](https://www.postman.com/dark-sunset-399073/workspace/music-api) Workspace.