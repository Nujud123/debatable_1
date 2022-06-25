/**
 * endorsementRepository.js responsible for managing endorsement in database.
 * Nujud Almaleki, 2022
 */

const knex = require("../knexHelper");

const addEndorsement = async function(endorsementData){
    return knex
        .insert(endorsementData)
        .into('endorsements')
        .returning('*');
};

//to use addEndorsement in other file.
module.exports ={
    addEndorsement
};