import { Request, Response, Router, NextFunction } from "express";
import { useUserRouter } from "./UserRouter";

export const useRouter = () => {
  const router = Router();
  router.get("/", function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "welcome to the api" });
  });
  router.use("/user", useUserRouter());
  return router;
};
