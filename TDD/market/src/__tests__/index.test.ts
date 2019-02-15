import Homer from "../index";

describe("Homer class", () => {
  it("should have a name function", () => {
    expect(Homer.name).toBeDefined();
    expect(Homer.name()).toEqual("Homer Simpson");
  });
});
