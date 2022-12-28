const { response } = require('express');
const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const trainerHelpers = require('../helpers/trainerHelpers');
const commenHelpers = require('../helpers/CommenHelpers');

const trainerLogin = AsyncHandler(async (req, res) => {
  trainerHelpers
    .trainerdoLogin(req.body)
    .then((response) => {
      if (response.status) {
        console.log('response', response);
        const token = jwt.sign(
          {
            trainerId: response.trainer._id,
            name: response.trainer.fname + response.trainer.lname,
          },
          'fityou5055'
        );
        console.log(token);
        return res.json({ status: 'ok', token: token });
      }
      return res.json({ status: 'error', user: false });
    })
    .catch((err) => res.json({ status: 'error', user: false }));
});
const uploadVideo = AsyncHandler((req, res) => {
  const data = req.body;
  const ytUrl = data.link;
  // replace:

  data.link = ytUrl.replace('/watch?v=', '/embed/');
  commenHelpers
    .uploadVideo(req.body)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch((err) => {
      console.log(err);
    });
});
const SendOtp = AsyncHandler(async (req, res) => {
  // console.log(req.body);
  // res.json({ status: true });

  trainerHelpers
    .sendOTPVerificationEmail(req.body)
    .then((data) => res.json({ status: true }))
    .catch((error) => res.json({ status: false, message: error }));
});
const verifiyOtp = AsyncHandler(async (req, res) => {
  trainerHelpers
    .otpLogin(req.body)
    .then((response) => {
      if (response.status) {
        console.log('response', response);
        const token = jwt.sign(
          {
            trainerId: response.trainer._id,
            name: response.trainer.fname + response.trainer.lname,
          },
          'fityou5055'
        );
        console.log(token);
        return res.json({ status: 'ok', token: token });
      }
      return res.json({ status: 'error', user: false });
    })
    .catch((err) => res.json({ status: 'error', user: false }));
});

// exports
module.exports = {
  trainerLogin,
  uploadVideo,
  verifiyOtp,
  SendOtp,
};
