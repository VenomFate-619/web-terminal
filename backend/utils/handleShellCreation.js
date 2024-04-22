import  processOutput  from "./processOutput.js";

const handleShellCreation = (container, ws) => {
  console.log("shell creation");
  container.exec(
    {
      Cmd: ["/bin/bash"],
      AttachStdin: true,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
      User: "root",
    },
    (err, exec) => {
      exec.start(
        {
          stdin: false,
          hijack: true,
        },
        (err, stream) => {
          processOutput(stream, ws);
          ws.on("message", (message) => {
            stream.write(message);
          });
        }
      );
    }
  );
};

export default handleShellCreation;
