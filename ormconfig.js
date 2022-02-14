const REGION = "ap-northeast-1";
const DB_CLST_ARN = process.env.DB_CLST_ARN;
const SECRET_ARN = process.env.SECRET_ARN;
const SCHEMA = "test-db";

const LOCAL = !!process.env.LOCAL ?? false;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

const local = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  connectTimeout: 5 * 1000,
  acquireTimeout: 5 * 1000,
  entities: [__dirname + "/dist/entity/**/*.js"],
  migrations: [__dirname + "/dist/migration/**/*.js"],
  // subscribers: [__dirname + '/dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    // subscribersDir: 'src/subscriber'
  },
};
const aws = {
  type: "aurora-data-api",
  region: REGION,
  resourceArn: DB_CLST_ARN,
  secretArn: SECRET_ARN,
  database: SCHEMA,
  entities: [__dirname + "/src/entities/**/*.ts"],
  migrations: [__dirname + "/src/migrations/**/*.ts"],
  subscribers: [__dirname + "/src/subscribers/**/*.ts"],
  cli: {
    entitiesDir: "src/entities/",
    migrationsDir: "src/migrations/",
    subscribersDir: "src/subscribers/",
  },
};

const conifg = [{ ...(LOCAL ? local : aws), name: "default" }];

module.exports = conifg;
