import { Router } from "express";
import { getCatOfUser, getUserInfo, getCategory, updateCatOfUsers, addCatOfUsers, addCategory } from "../controllers/user.js";

const router = Router();

router.get('/', getUserInfo)
router.get('/categoryofuser', getCatOfUser)
router.get('/category', getCategory)

router.post('/addcategory', addCategory) 
router.post('/addcatofuser', addCatOfUsers)

router.put('/updatecatofusers', updateCatOfUsers)

export default router;