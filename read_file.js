import * as fs from "fs";

export default function read(str) {
  let fileContent = fs.readFileSync(str, "utf8");
  let text = fileContent.split("\r\n");
  let M = [];
  let E = [];
  let dop1 = text[0].split(" ");
  for (let i = 0; i < dop1.length; i++) {
    E.push(Number(dop1[i]));
  }
  for (let i = 1; i < text.length; i++) {
    let dop2 = text[i].split(" ");
    let doparr = [[Number(dop2[0]), Number(dop2[1])]];
    doparr.push(Number(dop2[2]));
    M.push(doparr);
  }
  return { M, E };
}
