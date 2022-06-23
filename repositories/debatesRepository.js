/**
 * debatesRepository.js responsible for managing in database.
 * Nujud Almaleki, 2022
 */

const knex = require("../knexHelper");

const addDebate = async function(debatData){
    return knex
        .insert(debatableData)
        .into('debatable')
        .returning('*');
};

//to use addDebate in other file.
module.exports ={
    addDebate
};