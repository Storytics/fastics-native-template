import * as React from "react";
import * as renderer from "react-test-renderer";
import Description from "..";

describe("Description component UI", () => {
  test("Should render properly", () => {
    const tree = renderer
      .create(<Description>Fastics Native Description</Description>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
