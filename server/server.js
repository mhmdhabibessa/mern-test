const express = require("express");
const cors = require('cors') // This is new
const app = express();

require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");
app.use(cors()) // This is new

app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);

const server = app.listen(port, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("Nice to meet you ( shake hand)");
    console.log(socket.id);
    socket.on("Welcome", data => {
        console.log('Received Welcome event with data:', data); // Log data for debugging
        socket.emit("Hello Essa", data); // Emit back to the same socket
    });
});
