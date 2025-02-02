const express = require('express');
const app = express();
const port = 3000;

// Dummy endpoint to simulate CPU load
app.get('/cpu-stress', (req, res) => {
  const iterations = 9000000000; // This will make the loop run for a while and cause CPU stress

  // This loop will cause high CPU usage
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += Math.sqrt(i);
  }

  res.send(`CPU stress test complete. \n${process.pid} \n Result: ${result}`);
});

// Simple hello world endpoint
app.get('/', (req, res) => {
  res.send(`Hello, from pid: ${process.pid}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} and pid: ${process.pid}`);
});

