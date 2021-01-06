const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//newsController.index
//route goc luon luon de duoi de match tu tren xuong
//neu k de xuong thi no se match gay vao tk goc
//vd:
// router.use('/', newsController.index);
// router.use('/:slug', newsController.show);

router.use('/:slug', newsController.show);
router.use('/', newsController.index);


module.exports = router;