/**
 * debatesService.js responsible for managing debates business logic.
 * Nujud Almaleki, 2022
 */

const debatesRepo = require('../repositories/debatesRepository');

const addDebate = async function(req,res){ 
    //get the data from the body.
    let data = req.body;
    
    try{
        //try to add the debate to the database.
        const insertedDebate = await debatesRepo.addDebate(data);
        //send the response.
        await res.status(200).send(insertedDebate);
    }
    catch(err){
        //error happened at databese level.
        await res.status(400).send(err);
    }
};

const updateDebate = async function(req, res){
    //get the debate ID from the request parameters.
    const {debateId} = req.params;

    //get the data.
    const data = req.body;
   
    try{
        //try to update the debate to the database.
        const debate = await debatesRepo.updateDebate(debateId, data);
        //send the response.
        await res.status(200).send(debate);
    }
    catch(err){
        //error happened at databese level.
        await res.status(400).send(err);      
    }
};

const deleteDebate = async function(req, res){
    //get the debate ID from the request parameters.
    const {debateId} = req.params;
    console.log(debateId)
    try{
        await debatesRepo.markDebateAsDeleted(debateId);
        await res.status(204).end();
    }
    catch(err){
        await res.status(400).send(err);
    }
};


module.exports={
    addDebate,
    updateDebate,
    deleteDebate
};
