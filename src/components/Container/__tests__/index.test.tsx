import * as React from "react";
import * as renderer from "react-test-renderer";
import WithTheme from "theme/withTheme";
import Container from "..";

describe("Container component UI", () => {
  test("Should render properly", () => {
    const tree = renderer
      .create(
        <WithTheme>
          <Container>Fastics Native Description</Container>
        </WithTheme>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
