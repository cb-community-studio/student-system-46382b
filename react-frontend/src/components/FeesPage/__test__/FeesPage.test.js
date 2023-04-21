import React from "react";
import { render, screen } from "@testing-library/react";

import FeesPage from "../FeesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders fees page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FeesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("fees-datatable")).toBeInTheDocument();
    expect(screen.getByRole("fees-add-button")).toBeInTheDocument();
});
