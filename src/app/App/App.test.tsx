import { screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

import { App } from "../index";
import { render as renderMantine } from "../../modules/test-utils/render";

describe("App component", async function () {
  it("should render component App", () => {
    renderMantine(<App></App>);
    expect(screen.getByText(/SpaceX Launches 2020/i));
  });
});
