import { Router } from 'express';
import { httpCreateItem, httpDeleteAllItems, httpGetItems } from '../controllers/item.controllers.js';
import { asyncHandler } from '../utils/helpers.js';
import upload from '../utils/uploadImage.js';

const router = Router();

router.route('/')
        .post(upload.single("coverImage"),asyncHandler(httpCreateItem))
        .get(asyncHandler(httpGetItems))
        .delete(asyncHandler(httpDeleteAllItems));

export default router;