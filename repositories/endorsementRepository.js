/**
 * endorsementRepository.js responsible for managing endorsement in database.
 * Nujud Almaleki, 2022
 */

const knex = require("../knexHelper");

const addOrUpdateEndorsement = async function(debateId, userId, opinion){
    return knex
        .insert({
            debate_id: debateId,
            user_id: userId,
            opinion
        })
        .into('endorsements')
        .onConflict(['debate_id','user_id'])
        .merge()
        .returning('*');
};

//to use addOrUpdateEndorsement in other file.
module.exports ={
    addOrUpdateEndorsement
};