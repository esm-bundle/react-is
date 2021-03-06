describe("@esm-bundle/react-is", () => {
  it("can load the production esm bundle without dying", () => {
    return import("../esm/react-is.production.min.js");
  });

  it("can load the development esm bundle without dying", () => {
    return import("../esm/react-is.development.js");
  });

  it(`API exports are defined in production bundle`, async () => {
    const { default: ReactIs, isValidElementType, Element } = await import(
      "../esm/react-is.production.min.js"
    );
    expect(ReactIs.isValidElementType).not.to.equal(undefined);
    expect(isValidElementType).not.to.equal(undefined);
    expect(ReactIs.Element).not.to.equal(undefined);
    expect(Element).not.to.equal(undefined);
  });

  it(`API exports are defined in development bundle`, async () => {
    const { default: ReactIs, isValidElementType, Element } = await import(
      "../esm/react-is.development.js"
    );
    expect(ReactIs.isValidElementType).not.to.equal(undefined);
    expect(isValidElementType).not.to.equal(undefined);
    expect(ReactIs.Element).not.to.equal(undefined);
    expect(Element).not.to.equal(undefined);
  });
});
