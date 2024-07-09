/** udp tracker protocol and message format :
 * 1. send connect request
 * 2. get connect response -> extract connection id
 * 3. use connection id to send announce request -> tell tracker files we are interested in
 * 4. get announce response -> extract peers list
 */

"use strict";

import dgram from "node:dgram";
import { Buffer } from "node:buffer";
import url from "url";

export const getPeers = (torrent, callback) => {
  // creating socket with udp4 protocol
  const socket = dgram.createSocket("udp4");
  const url = torrent.announce.toString("utf8");

  // 1 - send request
  udpSend(socket, buildConnectionRequest(), url);

  socket.on("message", (response) => {
    if (responseType(response) === "connect") {
      // 2 - receive & parse response
      const connectionResponse = parseConnectionResponse(response);
      // 3 - send announce request
      const announceRequest = buildAnnounceRequest(
        connectionResponse.connectionId
      );
      udpSend(socket, announceRequest, url);
    } else if (responseType(response) === "announce") {
      // 4 - parse announce response
      const announceResponse = parseAnnounceResponse(
        connectionResponse.connectionId
      );

      // 5 - pass peers to callback
      callback(announceRequest.peers);
    }
  });
};

function udpSend(socket, message, rawUrl, callback = () => {}) {
  // parse the url
  const parsedUrl = url.parse(rawUrl);
  socket.send(
    message,
    0,
    message.length,
    parsedUrl.port,
    parsedUrl.host,
    callback
  );
}

// responseType - to check if response was for the connect or announce request. as it comes from same socket.
function responseType() {}
// other functions to build connection res and req.
function buildConnectionRequest() {}
function parseConnectionResponse() {}
function buildAnnounceRequest(connectionId) {}
function parseAnnounceResponse(response) {}
