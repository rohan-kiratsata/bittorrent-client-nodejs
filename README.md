# bittorrent-client-nodejs

Implementing bittorrent client in node.js to learn how torrents works.

Reference: https://allenkim67.github.io/programming/2016/05/04/how-to-make-your-own-bittorrent-client.html

- **Commit 4: References and what I learned about**
  - [Buffer](https://allenkim67.github.io/programming/2016/05/17/nodejs-buffer-tutorial.html)
  - encoding and decoding bencode data. something similar to json/xml but with different format, mainly used for torrents.
    - [Bencode](https://www.npmjs.com/package/bencode), 
    - [Bencoding Theory](https://wiki.theory.org/BitTorrentSpecification#Bencoding)
  - UDP is best for torrents as smaller chunks for data is sent and recieved in trackers, and use TCP for actual transfer of files
    - [dgram](https://nodejs.org/api/dgram.html)
    - [socket](https://nodejs.org/api/dgram.html#class-dgramsocket)
  - 
