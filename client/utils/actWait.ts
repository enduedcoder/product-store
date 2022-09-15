import { act } from '@testing-library/react';

export function wait(amount = 0) {
  return new Promise((resolve) => setTimeout(resolve, amount));
}

export async function actWait(amount = 0) {
  await act(async () => {
    await wait(amount);
  });
}
