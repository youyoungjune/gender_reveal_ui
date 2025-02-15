import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("successfully renders login component", () => {
    render(<LoginForm />);

    expect(
      screen.getByPlaceholderText("Your First and Last Name")
    ).toBeInTheDocument();
  });

  test("entering invalid types should error", async () => {
    render(<LoginForm />);

    const nameInput = screen.getByPlaceholderText("Your First and Last Name");
    const enterButton = screen.getByText("Enter");
    expect(nameInput).toBeTruthy();
    expect(enterButton).toBeTruthy();

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.click(screen.getByText("Enter"));
    expect(await screen.findByText("Please input a valid name.")).toBeTruthy();
  });
});
