import "@testing-library/jest-dom/vitest";
import { beforeEach, vi } from "vitest";

global.alert = vi.fn();

export const mockDispatch = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});
