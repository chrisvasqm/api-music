# Music API

NodeJS based backend to showcase how to use Drizzle ORM with TypeScript and a PostgreSQL database to keep track of:

- Albumns
- Songs
- Artists

## Relations

This API has the following relationships in the database:

- `Artist` 1..* `Albums`
- `Albums` 1..* `Songs`

> `1..*` means "One-to-Many". To know more, check out this [video](https://www.youtube.com/watch?v=xsg9BDiwiJE)

## Getting started

To get this API up and running you will need to follow these steps:

- Install `PostgreSQL` on your local machine.
- Make a copy of the `example.env` and rename it `.env`, then replace the placeholder values.
- Install all the dependencies with `npm install`.
- Run all `Drizzle` migrations with `npm run generate`.
- Start up the server with `npm run dev`

## Trying it out

After you have setup the project on your local machine, download Postman and head over to [this](https://www.postman.com/dark-sunset-399073/workspace/music-api) Workspace.