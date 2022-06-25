/**
 * debatesRoutes.js responsible for defining APIs/routes for debates.
 * Nujud Almaleki, 2022
 */

const debatesService = require('../services/debatesService');
const Router = require('express').Router();

/**
 * Add Debate Router.
 */
Router.post('/', debatesService.addDebate);

/**
 * Update Debate Route.
 */
Router.put('/debate/:debateId',debatesService.updateDebate);

/**
 * Delete Debate Router
 */
console.log('oop')
Router.delete('/debate/:debateId', debatesService.deleteDebate);

//to use Router in other file.
module.exports=Router;
