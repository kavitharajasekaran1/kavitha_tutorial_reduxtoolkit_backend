const express = require('express')
const router = express.Router();
const {AddTutorial,getAllTutorials,findTutorialByTitle,deleteTutorialById}  = require('../controllers/tutorial');


router.route('/tutorials').post(AddTutorial);
router.route('/tutorials/:title').get(findTutorialByTitle);
router.route('/tutorials').get(getAllTutorials);
router.route('/tutorials/:id').delete(deleteTutorialById)
module.exports = router;