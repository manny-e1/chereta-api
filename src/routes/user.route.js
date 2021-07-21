import { Router } from 'express';
import { httpCreateUser, httpGetUsers } from '../controllers/user.contollers.js';
import { asyncHandler } from '../utils/helpers.js';
import upload from '../utils/uploadImage.js';

const router = Router();

router.route('/').post(upload.single("avatar"),asyncHandler(httpCreateUser)).get(asyncHandler(httpGetUsers));

export default router;