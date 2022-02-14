import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);
      const result = await repository.find();
      console.log("result", result);
      response.json(result);
    } catch (e) {
      console.error(e);
    }
  }

  async one(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);
      const result = await repository.findOne(request.params.id);
      response.json(result);
    } catch (e) {
      console.error(e);
    }
  }

  async save(request: Request, response: Response, next: NextFunction) {
    try {
      const { username } = request.body;
      const repository = getRepository(User);
      const result = await repository.save({ username });
      response.json(result);
    } catch (e) {
      console.error(e);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);
      let userToRemove = await repository.findOne(request.params.id);
      const result = await repository.remove(userToRemove);
      response.json(result);
    } catch (e) {
      console.error(e);
    }
  }
}
