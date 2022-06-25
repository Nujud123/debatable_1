/**
 * debatesRoutes.js responsible for defining APIs/routes for debates.
 * Nujud Almaleki, 2022
 */

const debatesService = require('../services/debatesService');
const Router = require('express').Router();

/**
 * Add Debate Router.
 */
Router.post('/', function(req, res){
    debatesService.addDebate
});//send the posted req to the service in addDebate.

//to use Router in other file.
module.exports=Router;
