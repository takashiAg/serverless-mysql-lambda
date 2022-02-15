import { createConnection, Connection, getConnectionOptions } from "typeorm";
import entities from "@entity";

import { Migration1644894761628 } from "@migration/1644894761628-Migration";

export const getConnection = async (): Promise<Connection> => {
  const migrations = [Migration1644894761628];
  const connectionOptions = await getConnectionOptions();
  const conn = await createConnection({
    ...connectionOptions,
    entities,
    migrations,
  });
  return conn;
};
