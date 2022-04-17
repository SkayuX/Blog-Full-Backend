import { Router } from "express";
import errorHandler from "./miscellaneous/Errors";
import creatorHandler from "./Routes/CreateHandler";
import updateHandler from "./Routes/EditHandler";
import deleteHandler from "./Routes/DeleteHandler";
import getHandler from './Routes/GetHandler';
import getAllHandler from './Routes/GetAllHandler'

const router = Router();

router.use("/", getAllHandler)
router.use("/", getHandler);
router.use("/", deleteHandler);
router.use("/", updateHandler);
router.use("/", creatorHandler);
router.use("/", errorHandler);

export default router;
