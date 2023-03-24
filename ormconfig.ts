import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tasks",    
    synchronize:false,
    name: 'default',
    migrationsTableName: "migrations",
    entities: ["src/**/**.entity{.ts,.js}"],
    migrations: ["migrations/**/*.ts"],
    subscribers:['src/subscriber/**/*{.ts,.js}']
});

