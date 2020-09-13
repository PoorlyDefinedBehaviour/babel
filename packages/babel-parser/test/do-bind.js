import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("do notation", function () {
  it("should parse", function () {
    expect(
      getParser(`
      const x <- y
    `)(),
    ).toMatchSnapshot();
  });
});
