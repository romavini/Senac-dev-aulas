let times = [];
times.push("Corinthians");
console.log(times);

times[1] = "Palmeiras";
console.log(times);
console.log(times.length);

times[2] = "Vasco";
console.log(times);
times[3] = times[1];
times[1] = times[2];
times[2] = times[3];
times.pop();
console.log(times);