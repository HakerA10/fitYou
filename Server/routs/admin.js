const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/adminLogin', adminControllers.adminLogin);
router.get('/api/userInfo', auth.adminprotect, adminControllers.userInfo);
router.post(
  '/api/updateUserInfo',
  auth.adminprotect,
  adminControllers.updateUserInfo
);
router.get(
  '/api/trainerApprovel',
  auth.adminprotect,
  adminControllers.trainerApprovel
);
router.get(
  '/api/getTrainerDetails/:id',
  auth.adminprotect,
  adminControllers.getTrainerDetails
);
router.get(
  '/api/getuserDetails/:id',
  auth.adminprotect,
  adminControllers.getuserDetails
);

router.get(
  '/api/trainerReject/:id',
  auth.adminprotect,
  adminControllers.rejectTrainer
);
router.get(
  '/api/trainerApprovel/:id',
  auth.adminprotect,
  adminControllers.approvelTrainer
);
router.post('/api/uploadVideo', auth.adminprotect, (req, res) => {
  console.log(req.body);
  console.log(req.body.image);
});
module.exports = router;
