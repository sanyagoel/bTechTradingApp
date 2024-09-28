const User = require('../models/user.model').User


const registerUser = async (req,res) => {
    try{
        console.log('user Details: ', req.body)
        const user = User.findOne({email : req.body.email});
        const userUsername = User.findOne({username : req.body.username});
        if(user){
            res.send("The person with this email already exists");
        }
        if(userUsername){
            res.send("Username already exists");
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

module.exports = { registerUser,getUser }