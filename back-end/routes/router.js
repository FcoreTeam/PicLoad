import { Router } from "express";
import { getCatOfUser, getUserInfo, enterPromocode, updateIncome, updateTimeIncoming, memberStatus, getRandomError, uploadImage } from "../controllers/user.js";

const router = Router();

router.get('/api/', getUserInfo)
router.get('/api/categoryofuser', getCatOfUser)
router.get('/api/memberStatus', memberStatus)
router.get('/api/randomError', getRandomError)

// router.put('/api/updatecatofuser', updateCatOfUsers)
router.put('/api/updateincome', updateIncome)
router.put('/api/updatetimeincoming', updateTimeIncoming)
router.put('/api/enterPromocode', enterPromocode)
router.put('/api/uploadImage', uploadImage)


export default router;