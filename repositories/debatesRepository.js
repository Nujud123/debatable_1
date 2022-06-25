/**
 * debatesRepository.js responsible for managing debates in database.
 * Nujud Almaleki, 2022
 */

const knex = require("../knexHelper");

const addDebate = async function(debateData){
    return knex
        .insert(debateData)
        .into('debatable')
        .returning('*');
};

const updateDebate = async function(debateId, updateData){
    return knex('debatable')
        .where({id: debateId})
        .update(updateData)
        .returning('*');
};

const markDebateAsDeleted = async function(debateId){
    return knex('debatable')
       .where({id: debateId})
       .update({isDeleted: true});
};

module.exports ={
    addDebate,
    updateDebate,
    markDebateAsDeleted
};