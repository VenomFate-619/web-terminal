import path from "path";
import Docker from "dockerode";

const docker = new Docker();

const handleContainerCreate = (wsForShell, req, socket, head) => {
  docker.createContainer(
    {
      Image: "my_first_image",
      // name: playgroundId,
      AttachStderr: true,
      AttachStdin: true,
      AttachStdout: true,
      Cmd: "/bin/bash".split(" "),
      Tty: true,
      //   Volumes: {
      //     "/home/rajat/code": {},
      //   },
      HostConfig: {
        // Binds: [
        //   `${path.resolve(
        //     __dirname + "/../playgrounds/" + playgroundId + "/code"
        //   )}:/home/rajat/code`,
        // ],
        PortBindings: {
          "5173/tcp": [{ HostPort: "0" }],
        },
      },
      ExposedPorts: {
        "5173/tcp": {},
      },
    },
    (err, container) => {
      if (err) {
        console.log(err);
        // ws.send(err);
      } else {
        container.start().then((err, data) => {
          console.log("container started");
          console.log(data);
          wsForShell.handleUpgrade(req, socket, head, (ws) => {
            wsForShell.emit("connectToTerminal", ws, req, container);
          });
        });
      }
    }
  );
};

export default handleContainerCreate;
