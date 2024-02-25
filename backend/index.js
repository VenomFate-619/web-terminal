import express from "express";
import * as http from "http";
import { WebSocketServer } from "ws";
import handleContainerCreate from "./utils/handleContainerCreation.js";
import handleShellCreation from "./utils/handleShellCreation.js";

const port = 5000;

const app = express();

const server = app.listen(port || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

const wsForShell = new WebSocketServer({
  noServer: true,
});

wsForShell.on("connectToTerminal", (ws, req, container) => {
  console.log("connectToTermninal");
  handleShellCreation(container, ws);
  ws.on("close", () => {
    container.remove({ force: true }, (err, data) => {
      if (err) console.log(err);
      else console.log(`Killed container ${container.id} with no error`);
    });
  });
});

server.on("upgrade", (req, socket, head) => {
  console.log("upgrade");
  handleContainerCreate(wsForShell, req, socket, head);
});
