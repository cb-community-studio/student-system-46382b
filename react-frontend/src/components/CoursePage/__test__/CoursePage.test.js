import React from "react";
import { render, screen } from "@testing-library/react";

import CoursePage from "../CoursePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders course page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CoursePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("course-datatable")).toBeInTheDocument();
    expect(screen.getByRole("course-add-button")).toBeInTheDocument();
});
