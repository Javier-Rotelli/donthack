# Don't Hack Me

A simple Express middleware based on this tweet from @Nick_Craver

https://twitter.com/Nick_Craver/status/720044678075260928

![it Tickles!](https://pbs.twimg.com/media/Cf4cn9vW4AEL-G_.jpg)

it stops a bunch of known urls used by hacks for different plattforms

## Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```bash
npm install donthackme 
```

## Usage
```javascript
var donthackme = require('donthackme')
var express = require('express')

var app = express()

app.use(donthackme({
  redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}))
```

Have Fun!