const express = require('express')
const cors = require('cors')

app = express()

app.use(express.json())
app.use(cors())

const users = [
    { userName: 'salil@yahoo.com', password: '1234' },
    { userName: 'raj@yahoo.com', password: '1234' },
    { userName: 'zig@yahoo.com', password: '1234' },
]

app.get('/logout',(req,res)=>{
   return res.send('Hello')
})

app.post('/login', (req, res) => {
    let exist = users.find((user) => user.userName == req.body.userName && user.password == req.body.password)
    if (exist) {
        return res.status(200).json({ Authorized: true })
    }
    return res.status(401).json({ Authorized: false })
})

app.listen(5000, () => {
    console.log('App is listening at port 5000')
})