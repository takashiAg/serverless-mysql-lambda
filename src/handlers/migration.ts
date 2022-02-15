import { getConnection } from "@libs/getConnection";

export const runMigration = async () => {
  try {
    const connection = await getConnection();
    const result = await connection.runMigrations({ transaction: "none" });
    await connection.close();
    return result;
  } catch (error) {
    throw error;
  }
};

export const undoLastMigration = async () => {
  try {
    const connection = await getConnection();
    await connection.undoLastMigration({ transaction: "none" });
    await connection.close();
  } catch (error) {
    throw error;
  }
};
