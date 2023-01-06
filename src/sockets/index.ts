import { Base } from "../base";
import {Server, Socket} from "socket.io";

export class Sockets extends Base{
    createConnection() : string{
        return "hello world. I am connected"
    }

    createSocketConnection(app: any): any {
        const io=require("socket.io")(app);
        io.on("connection",(socket: Socket)=>{
         console.log("Connected");
        }) 
        return io 
    }
}