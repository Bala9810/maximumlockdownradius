const http = require("http");
const https = require("https");
const PORT = 3000;

const server = http.createServer((req, res) => {
let probabilty1 = 80;
let probabilty2 = 40;
let distance1 = 5;
let distance2 = 12;
function maximumDistance( probabilty1, probabilty2, distance1, distance2,assuranceProbability,daysFromFirstInfection) {
const average= distance1 + ((assuranceProbability - probabilty1) / (probabilty2 - probabilty1)) * (distance2 - distance1);
       return average*daysFromFirstInfection
}
var maximumLockdownRadius = maximumDistance(probabilty1, probabilty2, distance1, distance2,80,5);
console.log(`MaximumLockdownRadius is ${maximumLockdownRadius}`)
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
