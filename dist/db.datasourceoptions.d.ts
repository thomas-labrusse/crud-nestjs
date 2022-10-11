declare const dbConfig: {
    synchronize: boolean;
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
};
export default dbConfig;
