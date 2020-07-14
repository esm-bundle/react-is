describe("@esm-bundle/react-is", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
  it(`API exports are defined`, async () => {
    const { default: ReactIs, isValidElementType, Element } = await import(
      "../esm/index.js"
    );
    expect(ReactIs.isValidElementType).not.to.equal(undefined);
    expect(isValidElementType).not.to.equal(undefined);
    expect(ReactIs.Element).not.to.equal(undefined);
    expect(Element).not.to.equal(undefined);
  });
});
