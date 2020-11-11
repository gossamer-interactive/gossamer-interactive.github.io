module.exports = {
  "buildOptions": {
    "out": "dist",
    "clean": true
  },
  "mount": {
    "_output": "/",
    "assets": "/"
  },
  "plugins": [
    [
      "@snowpack/plugin-run-script",
      {
        "cmd": "eleventy",
        "watch": "$1 --watch" 
      }
    ]
  ],
  "devOptions": {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    "hmrDelay": 300
  },
}