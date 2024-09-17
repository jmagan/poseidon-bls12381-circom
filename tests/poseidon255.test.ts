import { Circomkit, WitnessTester } from "circomkit";
import { readFileSync } from "fs";
import path from "path";

const configFilePath = path.join(__dirname, "../circomkit.json");
const config = JSON.parse(readFileSync(configFilePath, "utf-8"));

export const circomkit = new Circomkit({
  ...config,
  verbose: false,
});

describe("Poseidon255", () => {
  let poseidon2Circuit: WitnessTester<["in"], ["out"]>;

  before(async () => {
    poseidon2Circuit = await circomkit.WitnessTester("poseidon255_2", {
      file: "poseidon255",
      template: "Poseidon255",
      params: [2],
    });
  });

  it("Poseidon255_2 circuit", async () => {
    const INPUT = { in: [BigInt(1), BigInt(2)] };
    const OUTPUT = {
      out: 0x3fb8310b0e962b75bffec5f9cfcbf3f965a7b1d2dcac8d95ccb13d434e08e5fan,
    };

    await poseidon2Circuit.expectPass(INPUT, OUTPUT);
  });
});
