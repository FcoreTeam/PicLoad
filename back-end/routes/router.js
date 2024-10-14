import { Router } from "express";
import { getCatOfUser, getUserInfo, getCategory, updateCatOfUsers, addCatOfUsers, addCategory, addPromo } from "../controllers/user.js";

const router = Router();

router.get('/api/', getUserInfo)
router.get('/api/categoryofuser', getCatOfUser)
router.get('/api/category', getCategory)

router.post('/api/addcategory', addCategory) 
router.post('/api/addcatofuser', addCatOfUsers)
router.post('/api/addpromo', addPromo)

router.put('/api/updatecatofusers', updateCatOfUsers)

export default router;