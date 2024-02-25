function bufferSlice(end) {
  const out = buffer.slice(0, end);
  buffer = Buffer.from(buffer.slice(end, buffer.length));
  return out;
}

function processOutput(stream, ws) {
  let nextDataType = null;
  let nextDataLength = null;
  let buffer = Buffer.from("");

  function processData(data) {
    if (data) {
      buffer = data
      let x = buffer.toString();
      console.log(x);
      ws.send(x);
    //   processData();
    }
  }

  stream.on("data", processData);
}

export default processOutput;
