/**
 * debatesService.js responsible for managing debates business logic.
 * Nujud Almaleki, 2022
 */

const debatesRpo = require('../repositories/debatesRepository');

const addDebate = async function(req,res){ 
    let data = req.body;//get the data from the body.
    
    try{
        //try to add the debate to the database.
        const insertedDebate = await debatesRpo.addDebate(data);
        //send the response.
        await res.status(200).send(insertedDebate);
    }
    catch(err){
        //error happened at databese level.
        await res.status(400).send(err);
    }

    //to use addDebate in other file.
    module.exports={
        addDebate
    };
};