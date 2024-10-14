import { Router } from "express";
import { getCatOfUser, getUserInfo, getCategory, updateCatOfUsers, addCatOfUsers, addCategory } from "../controllers/user.js";

const router = Router();

router.get('/api/', getUserInfo)
router.get('/api/categoryofuser', getCatOfUser)
router.get('/api/category', getCategory)

router.post('/api/addcategory', addCategory) 
router.post('/api/addcatofuser', addCatOfUsers)

router.put('/api/updatecatofusers', updateCatOfUsers)

export default router;