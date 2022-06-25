/**
 *endorsementsRoutes.js responsible for defining APIs/routes for endorsements.
 * Nujud Almaleki, 2022
 */

 const endorsementsService = require('../services/endorsementsService');
 const Router = require('express').Router();
 
 /**
  * Add Endorsement Router.
  */
 Router.post('/:debateId/endorsements', endorsementsService.addEndorsement);//send the posted req to the service in addDebate.
 
 //to use Router in other file.
 module.exports=Router;
 