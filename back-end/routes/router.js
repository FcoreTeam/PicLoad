import { Router } from "express";
import { getCatOfUser, getUserInfo, getCategory, updateCatOfUsers, enterPromocode, updateIncome, updateTimeIncoming } from "../controllers/user.js";

const router = Router();

router.get('/api/', getUserInfo)
router.get('/api/categoryofuser', getCatOfUser)
router.get('/api/category', getCategory)

router.put('/api/updatecatofuser', updateCatOfUsers)
router.put('/api/updateincome', updateIncome)
router.put('/api/updatetimeincoming', updateTimeIncoming)
router.put('/api/enterPromocode', enterPromocode)
router.put('/api/updatecatofusers', updateCatOfUsers)

export default router;