const User = require('../models/user.model').User


const registerUser = async (req,res) => {
    try{
        console.log('user Details: ', req.body)
        const user = await User.findOne({email : req.body.email});
        const userUsername = await User.findOne({username : req.body.username});
        if(user){
          return  res.send("The person with this email already exists");
        }
        if(userUsername){
           return res.send("Username already exists");
        }
        let userData = User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        await userData.save()
        res.send('User registered!!!')
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
}

const getUser = async(req,res) => {
    try{
        User.find({})
            .then(data => res.send(data))
            .catch(err => res.send('something went wrong'))
    }catch(err){
        console.log(err)
        res.send('ERR')
    }
}

const updateUserById = async(req,res)=>{
    try{

        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id,{
            username : "dorae"
        });
        if(!user){
            res.send("Something went wrong");
        }
        res.send(user);
    }catch(err){
        console.log(err);
    }
}

const deleteUserById = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.send("Something went wrong");
        }
        res.send("DELETED!");
    }catch(err){
        console.log(err);
    }
}



module.exports = { registerUser,getUser ,updateUserById,deleteUserById}