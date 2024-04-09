"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const users = [
    { userName: 'salil@yahoo.com', password: '1234' },
    { userName: 'raj@yahoo.com', password: '1234' },
    { userName: 'zig@yahoo.com', password: '1234' },
];
app.post('/login', (req, res) => {
    let exist = users.find((user) => user.userName == req.body.userName && user.password == req.body.password);
    if (exist) {
        return res.status(200).json({ Authorized: true });
    }
    return res.status(401).json({ Authorized: false });
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
