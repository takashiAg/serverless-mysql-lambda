import { Request, Response, Router, NextFunction } from "express";
const router = Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.json({ message: "welcome to the api" });
});

export default router;
