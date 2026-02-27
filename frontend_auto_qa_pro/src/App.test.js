import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Auto QA Pro hero title", () => {
  render(<App />);
  const title = screen.getByRole("heading", { name: /Auto QA Pro/i });
  expect(title).toBeInTheDocument();
});
