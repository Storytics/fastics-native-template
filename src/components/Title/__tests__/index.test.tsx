import * as React from "react";
import * as renderer from "react-test-renderer";
import WithTheme from "theme/withTheme";
import Title from "..";

describe("Title component UI", () => {
  test("Should render properly", () => {
    const tree = renderer
      .create(
        <WithTheme>
          <Title>Fastics Native Title</Title>
        </WithTheme>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
