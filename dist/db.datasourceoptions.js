"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    synchronize: false,
    migrations: ['migrations/*.js'],
    cli: {
        migrationsDir: 'migrations',
    },
};
switch (process.env.NODE_ENV) {
    case 'development':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: ['**/*.entity.js'],
            migrationsRun: true,
        });
        break;
    case 'test':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'test.sqlite',
            entities: ['**/*.entity.ts'],
        });
        break;
    case 'production':
    default:
        throw new Error('unknown environment');
        break;
}
exports.default = dbConfig;
//# sourceMappingURL=db.datasourceoptions.js.map