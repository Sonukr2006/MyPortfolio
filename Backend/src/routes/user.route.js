import { Router } from "express";
import { ContactWithAdmin } from "../controllers/contact.controller.js";

const router = Router();

router.route("/contact").post(ContactWithAdmin);

export default router;