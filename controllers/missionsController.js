const router = require('express').Router();
const missions = require('../models/marsMission');

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

router.get('/:missionIndex', (req, res) => {
  const missionIndex = req.params.missionIndex;
  const mission = missions[missionIndex];
  res.render('./missions/show', {
    mission: mission
  })
});

module.exports = router;