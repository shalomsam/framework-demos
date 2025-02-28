import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";
import { env } from "$env/dynamic/private";

class AppDataSource {
    private static instance: Promise<DataSource|null> | null = null;
    
    private constructor() {}

    public static getDataSource(): Promise<DataSource|null> {
        if (!AppDataSource.instance) {
            AppDataSource.instance = new DataSource({
                type: env.DBTYPE as any,
                host: env.DBHOST,
                port: Number(env.DBPORT),
                username: env.DBUSER,
                password: env.DBPASSWORD,
                database: env.DBNAME,
                entities: [Todo],
                logging: true,
                synchronize: true,
            })
            .initialize()
            .then((dataSource) => {
                console.log("Data Source has been initialized!");
                return dataSource;
            })
            .catch((err) => {
                console.error("Error during Data Source initialization:", err);
                //throw err;
                return null
            });
        }

        return AppDataSource.instance;
    }
}

export default AppDataSource;