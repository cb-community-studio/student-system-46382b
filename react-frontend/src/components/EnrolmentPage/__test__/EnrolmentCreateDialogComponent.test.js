import React from "react";
import { render, screen } from "@testing-library/react";

import EnrolmentCreateDialogComponent from "../EnrolmentCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders enrolment create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EnrolmentCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("enrolment-create-dialog-component")).toBeInTheDocument();
});
