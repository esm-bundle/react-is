describe("@esm-bundle/react-is", () => {
  it("can load the production ESM bundle", () => {
    return import("/base/esm/react-is.production.min.js");
  });

  it("can load the development ESM bundle", () => {
    return import("/base/esm/react-is.development.js");
  });

  it("can load the production System.register bundle", () => {
    return System.import("/base/system/react-is.production.min.js").then(
      (module) => {
        expect(module.default).toBeDefined();
        expect(module.__esModule).toBeDefined();
        // Named export
        expect(typeof module.isValidElementType).toBe("function");
        // Default export
        expect(typeof module.default.isValidElementType).toBe("function");
        // Non function export
        expect(module.default.Element).toBeDefined();
        expect(module.Element).toBeDefined();
      }
    );
  });

  it("can load the development System.register bundle", () => {
    return System.import("/base/system/react-is.development.js").then(
      (module) => {
        expect(module.default).toBeDefined();
        expect(module.__esModule).toBeDefined();
        // Named export
        expect(typeof module.isValidElementType).toBe("function");
        // Default export
        expect(typeof module.default.isValidElementType).toBe("function");
        // Non function export
        expect(module.default.Element).toBeDefined();
        expect(module.Element).toBeDefined();
      }
    );
  });
});
