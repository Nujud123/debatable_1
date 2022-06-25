/**
 *endorsementsService.js responsible for managing endorsements business logic.
 * Nujud Almaleki, 2022
 */

 const endorsementsRpo = require('../repositories/endorsementRepository');

 const addEndorsement = async function(req, res){
    //get the debate ID from the request parameters.
    const {debateId} = req.params;

    //get the data.
    const data = req.body;

    //insert the data to the database.
    try{
        const endorsement = await endorsementRepo.addOrUpdateEndorsement(debateId, data.user_id, opinion);
        await res.status(200).send(endorsement);
    }
    catch(err){
        await res.status(400).send(err);
    }
 };

 //to use addEndorsement in other file.
module.exports ={
    addEndorsement
};

