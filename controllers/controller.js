const Usermodel = require("../models/user");




async function handelgetallusers(req,res){
    const allDbusers = await Usermodel.find({});
    return res.json(allDbusers)

}
async function getUserbyid(req,res){

    const user = await Usermodel.findById(req.params.id);
    if(!user)  return res.status(404).json({error:"User not found"})

    return res.jsin(user);

}

async function  handleUpdateuserById(req,res){
    await Usermodel.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({status:"Success"})

}


async function handledeleteByid(req,res){
    await Usermodel.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"})
}

async function handleCreateUser(req,res){
    const body = req.body;

    // Check for required fields
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        const result = await Usermodel.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobtitle: body.job_title
        });
        console.log("result", result);
        return res.status(201).json({ msg: "Success", id: result._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error creating user" });
    }
}
module.exports ={handelgetallusers,getUserbyid,handleUpdateuserById,handledeleteByid,handleCreateUser}