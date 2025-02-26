const express=require('express')
const app=express()
const port=4010
const cors=require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Signup validation")
})

const validateEmail=(email)=>{
    return email.includes('@') && email.includes('.')
}

app.post('/signup', (req, res)=>{
    const {username, email, password, dob}=req.body
    const user={username, email, password, dob}
    if(username.trim()==""){
        return res.json({"message":"Username cannot be empty"})
    }
    if(email.trim()==""){
        return res.json({"message":"Email cannot be empty"})
    }
    if(!validateEmail(email)){
        return res.json({"message":"Enter a valid email"})
    }
    if(!password|| password.length<8 || password>16){
        return res.json({"message":"Password length should be greater than 8 or less than equal to 16"})
    }
    return res.json({"message":"User created successfully", user})
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})