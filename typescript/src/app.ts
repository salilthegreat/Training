import express, { Request, Response } from 'express';
import cors from 'cors'
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())

interface userInterface {
  userName: string,
  password: string
}

const users:userInterface[] = [
  { userName: 'salil@yahoo.com', password: '1234' },
  { userName: 'raj@yahoo.com', password: '1234' },
  { userName: 'zig@yahoo.com', password: '1234' },
]


app.post('/login', (req:Request, res:Response) => {
  let exist = users.find((user) => user.userName == req.body.userName && user.password == req.body.password)
  if (exist) {
      return res.status(200).json({ Authorized: true })
  }
  return res.status(401).json({ Authorized: false })
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
