import { Router } from "express";
import { getCatOfUser, getUserInfo, getCategory, addUser, updateCatOfUsers, addCatOfUsers, addCategory } from "../controllers/user.js";

const router = Router();

router.get('/', getUserInfo)
router.get('/categoryofuser', getCatOfUser)
router.get('/category', getCategory)

router.post('/adduser', addUser)
router.post('/addcategory', addCategory) // Start this
router.post('/addcatofuser', addCatOfUsers)

router.put('/updatecatofusers', updateCatOfUsers)

export default router;