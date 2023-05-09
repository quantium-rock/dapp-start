import socket from "./";

export const emitConnection = (pubkey: string) => {
  socket.emit("newConnection", pubkey);
  socket.off("newConnection");
  console.log(pubkey);
  socket.off("newConnection");
};

export const emitDisconnection = (pubkey: string) => {
  socket.emit("newDisconnection", pubkey);
  socket.off("newDisonnection");
};
