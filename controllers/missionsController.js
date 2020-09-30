const router = require('express').Router();
const missions = require('../models/marsMission');


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

router.get('/', (req, res) => {
  const marsMission = missions;
  res.render('missions/indexMission', {
    marsMission: marsMission
  });
});


// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

router.get('/:missionIndex', (req, res) => {
  const missionIndex = req.params.missionIndex;
  const mission = missions[missionIndex];
  res.render('./missions/showMission', {
    mission: mission
  })
});

module.exports = router;