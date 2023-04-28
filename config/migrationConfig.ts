import {DataSource, DataSourceOptions} from "typeorm";

export const dataSourceOption: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'soulDecoder',
    password: 'soulDecoder',
    database: 'soulDecoder',
    "entities": ["src/**/*.entity.js"],
    "migrations": ["src/migrations/*.ts"]
}

export const dataSource = new DataSource(dataSourceOption);

// export default dataSource;
