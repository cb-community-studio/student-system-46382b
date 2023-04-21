import React from "react";
import { render, screen } from "@testing-library/react";

import EnrolmentPage from "../EnrolmentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders enrolment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EnrolmentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("enrolment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("enrolment-add-button")).toBeInTheDocument();
});
