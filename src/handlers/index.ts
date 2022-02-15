import { runMigration, undoLastMigration } from "./migration";
export const up = runMigration;
export const down = undoLastMigration;
