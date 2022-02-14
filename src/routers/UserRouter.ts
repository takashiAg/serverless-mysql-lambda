import { Router } from "express";
import { UserController } from "../controller/UserController";

// export default router;
export const useUserRouter = () => {
  const router = Router();
  const userController = new UserController();
  router.get("/", userController.all);
  router.get("/:id", userController.one);
  router.post("/", userController.save);
  router.delete("/:id", userController.remove);
  return router;
};
