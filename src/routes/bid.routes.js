import { Router } from 'express';
import { httpCreateBid, httpGetBids, httpGetHighestBid } from '../controllers/bid.contollers.js';
import { asyncHandler } from '../utils/helpers.js';
import upload from '../utils/uploadImage.js';

const router = Router();

router.route('/').post(upload.single("avatar"),asyncHandler(httpCreateBid)).get(asyncHandler(httpGetBids));
router.route('/highest').get(asyncHandler(httpGetHighestBid));
export default router;