import { Router } from "express";
import { getCatOfUser, getUserInfo, updateCatOfUsers, enterPromocode, updateIncome, updateTimeIncoming, memberStatus } from "../controllers/user.js";

const router = Router();

router.get('/api/', getUserInfo)
router.get('/api/categoryofuser', getCatOfUser)
router.get('/api/memberStatus', memberStatus)

router.put('/api/updatecatofuser', updateCatOfUsers)
router.put('/api/updateincome', updateIncome)
router.put('/api/updatetimeincoming', updateTimeIncoming)
router.put('/api/enterPromocode', enterPromocode)


export default router;