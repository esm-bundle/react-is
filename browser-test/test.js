describe("@esm-bundle/react-is", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/index.js");
  });

  it("can load the System.register bundle", () => {
    return System.import("/base/system/index.js").then((module) => {
      expect(module.default).toBeDefined();
      expect(module.__esModule).toBeDefined();
      // Named export
      expect(typeof module.isValidElementType).toBe("function");
      // Default export
      expect(typeof module.default.isValidElementType).toBe("function");
      // Non function export
      expect(module.default.Element).toBeDefined();
      expect(module.Element).toBeDefined();
    });
  });
});
