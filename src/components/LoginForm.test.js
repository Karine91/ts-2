import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { reducer as formReducer } from "redux-form";
import { loginUserSaga } from "../sagas";
import { stopSubmit } from "redux-form";
import {
  loginUser,
  loginUserSuccess,
  loginUserError
} from "../actions/auth";
import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

import LoginForm from "./LoginForm";

let wrapper;
const history = {
  push: jest.fn(),
  location: {
    pathname: "/"
  },
  listen: () => {}
};

const onSubmit = jest.fn();

const store = createStore(
  combineReducers({ form: formReducer })
);

const LoginFormComponentWrapper = props => (
  <Provider store={store}>
    <Router history={history}>
      <LoginForm {...props} />
    </Router>
  </Provider>
);

describe("Login Form", () => {
  beforeEach(() => {
    wrapper = mount(<LoginFormComponentWrapper />);
  });

  it("Buttons should be disabled", () => {
    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toEqual(true);
  });

  it("Buttons should not be disabled if any changes", () => {
    const firstInput = wrapper.find("input").first();
    firstInput.simulate("change", {
      target: { value: "test" }
    });

    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toBeFalsy();
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toBeFalsy();
  });

  it("Call onSubmit when submit form with changed input values", () => {
    wrapper = mount(
      <LoginFormComponentWrapper onSubmit={onSubmit} />
    );
    const firstInput = wrapper.find("input").first();

    firstInput.simulate("change", {
      target: { value: "test" }
    });

    wrapper
      .find('button[type="submit"]')
      .simulate("submit");

    expect(onSubmit.mock.calls[0][0]).toEqual({
      email: "test"
    });
  });

  it("call register request, with success data", () => {
    const email = "eve.holt@reqres.in";
    const password = "123";
    const payload = { email, password };

    const generator = cloneableGenerator(loginUserSaga)(
      loginUser({ email, password })
    );

    expect(generator.next().value).toEqual(
      call([axios, "post"], "/register", payload)
    );

    expect(
      generator.next({ data: { email, password } }).value
    ).toEqual(put(loginUserSuccess({ email, password })));
  });

  it("should handle error with loginUserError action", () => {
    const generator = cloneableGenerator(loginUserSaga)(
      loginUser({})
    );

    generator.next(); // call register

    const error = {
      response: { data: { error: "Missing password" } }
    };
    expect(generator.throw(error).value).toEqual(
      put(loginUserError(error.response))
    );

    expect(generator.next().value).toEqual(
      put(
        stopSubmit("login", {
          _error: error.response.data.error
        })
      )
    );
    
  });
});
