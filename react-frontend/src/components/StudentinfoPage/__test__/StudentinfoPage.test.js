import React from "react";
import { render, screen } from "@testing-library/react";

import StudentinfoPage from "../StudentinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders studentinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <StudentinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("studentinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("studentinfo-add-button")).toBeInTheDocument();
});
