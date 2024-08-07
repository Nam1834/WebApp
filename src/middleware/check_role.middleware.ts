import { User } from "../models/user.model";
import { Request, Response, NextFunction } from "express";
const checkRole = (role: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByPk();

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.role !== role) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const checkAdmin = checkRole("admin");
export const checkGuest = checkRole("user");
