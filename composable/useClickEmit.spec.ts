import { useClickEmit } from "~/composable/useClickEmit";

describe("useClickEmit", () => {
  test("emit", () => {
    const { onClick } = useClickEmit();
    onClick();
  });
});