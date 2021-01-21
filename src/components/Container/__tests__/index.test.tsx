import * as React from "react";
import * as renderer from "react-test-renderer";
import Container from "..";

describe("Container component UI", () => {
  test("Should render properly", () => {
    const tree = renderer
      .create(<Container>Fastics Native Description</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
