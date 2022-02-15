import {
  createConnection,
  Connection,
  getConnectionOptions,
  getConnectionManager,
} from "typeorm";
import entities from "@entity";

import { Migration1644894761628 } from "@migration/1644894761628-Migration";

const CONNECTION_NAME = "default";

export const getConnection = async (): Promise<Connection> => {
  const migrations = [Migration1644894761628];

  const connectionManager = getConnectionManager();
  if (connectionManager.has(CONNECTION_NAME)) {
    const connection = await connectionManager.get(CONNECTION_NAME);
    if (!connection.isConnected) return await connection.connect();
    return connection;
  }
  const connectionOptions = await getConnectionOptions();
  const conn = await createConnection({
    ...connectionOptions,
    entities,
    migrations,
  });
  return conn;
};
