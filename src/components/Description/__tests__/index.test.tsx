import * as React from "react";
import * as renderer from "react-test-renderer";
import WithTheme from "theme/withTheme";
import Description from "..";

describe("Description component UI", () => {
  test("Should render properly", () => {
    const tree = renderer
      .create(
        <WithTheme>
          <Description>Fastics Native Description</Description>
        </WithTheme>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
