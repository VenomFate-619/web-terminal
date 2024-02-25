import { useEffect, useRef } from "react";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";

import { Terminal } from "xterm";

import "xterm/css/xterm.css";

const ShellComponent = () => {
  const terminal = useRef(null);

    const ws = new WebSocket(
      "ws://localhost:5000/"
    );

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      convertEol: true,
      theme: {
        background: "#282a36",
        foreground: "#f8f8f2",
        cyan: "#8be9fd",
        green: "#50fa7b",
        yellow: "#f1fa8c",
        red: "#ff5555",
        cursor: "#f8f8f2",
        cursorAccent: "#282a36",
      },
      fontSize: 16,
      fontFamily: "Ubuntu Mono, monospace",
    });
    if (terminal.current) {
      term.open(terminal.current);
      let fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      fitAddon.fit();
      // term.write("home> ");
      // term.onKey((e) => {
      //   if (e.domEvent.key === "Backspace") {
      //     if (term.buffer.active.cursorX > 6) {
      //       term.write("\b \b");
      //     }
      //   } else if (e.key === "\r") {
      //      term.write("\nhome> ");
      //   } else {
      //     term.write(e.key);
      //   }
      // });

      ws.onopen = () =>{
        const attachAddon = new AttachAddon(ws);
        term.loadAddon(attachAddon);
        // setWs(ws);
      }
    }

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div
      ref={terminal}
      className="terminal h-full w-full"
      id="terminal-container"
    />
  );
};

export default ShellComponent;
