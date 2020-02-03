//run with node
const fs = require('fs');

length = "500";
width = "500";

function content() {
  let data = "";
  let byte1 = 0, byte2 = 0, byte3 = 0;
  data += `P3\n${length} ${width}\n255`;
  for (let x = 0; x < Number(length); x++) {
    data += "\n";
    for (let y = 0; y < Number(width); y++) {
      byte1 = Math.round(Math.tan((x + y) / (Math.PI / 256)) * 128 + 128);
      byte1 = Math.abs(byte1) % 256;
      byte2 = Math.round(Math.sin(x / (Math.PI / 128)) * 128 + 128) % 256;
      byte3 = Math.round(Math.cos(y / (Math.PI / 128)) * 128 + 128) % 256;
      data += `${byte1} ${byte2} ${byte3} `;
    }
  }
  return data;
}

fs.writeFile("output.ppm", content(), (err) => {
  if (err) throw err;
})

