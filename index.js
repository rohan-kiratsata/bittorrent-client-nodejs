// index.js
"use strict";

import * as fs from "fs";
import bencode from "bencode";
import { getPeers } from "./tracker.js";

// reading the file
const torrent = bencode.decode(fs.readFileSync("test.torrent"));

// get the peers list
getPeers(torrent, (peers) => {
  console.log("list of peers: ", peers);
});
