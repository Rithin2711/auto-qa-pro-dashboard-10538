import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Auto QA Pro landing title", () => {
  render(<App />);
  const title = screen.getByText(/Build faster QA automation workflows/i);
  expect(title).toBeInTheDocument();
});
