import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) =>
  function buildDecorator(Story: React.FC) {
    return (
      <StoreProvider initialState={state as StateSchema}>
        <Story />
      </StoreProvider>
    );
  };
