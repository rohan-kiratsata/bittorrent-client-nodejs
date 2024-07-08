// index.js
"use strict";

import * as fs from "fs";
import bencode from "bencode";

// reading the file
const torrent = bencode.decode(fs.readFileSync("test.torrent"));
console.log(torrent.announce.toString("utf8"));
