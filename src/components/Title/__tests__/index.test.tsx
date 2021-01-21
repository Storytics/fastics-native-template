import * as React from "react";
import * as renderer from "react-test-renderer";
import Title from "..";

describe("Title component UI", () => {
  test("Should render properly", () => {
    const tree = renderer.create(<Title>Fastics Native Title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
