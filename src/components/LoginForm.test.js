import React from "react";
import { mount } from "enzyme";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import {
  reduxForm,
  reducer as formReducer
} from "redux-form";

import LoginForm from "./LoginForm";


let wrapper;
const history = {
    push: jest.fn(),
    location: {
      pathname: "/en/data-collection/property-valuation/"
    },
    listen: () => {}
  },
  defaultProps = {
    propertyType: 1,
    handleSubmit: fn => fn,
    onSubmit: jest.fn(),
    onSubmitAndNavigate: jest.fn(),
    onNavigate: jest.fn()
  },
  store = createStore(
    combineReducers({ form: formReducer })
  ),
  Decorated = reduxForm({
    form: "property-details-form"
  })(LoginForm),
  LoginFormComponentWrapper = props => (
    <Provider store={store}>
      <Router history={history}>
        <Decorated {...defaultProps} {...props} />
      </Router>
    </Provider>
  );

describe("Login Form", () => {
    beforeEach(() => {
      wrapper = mount(<LoginFormComponentWrapper />);
    });

  it("submit btn should be disabled", () => {
    expect(
      wrapper.find(
        "button[type='submit']"
      ).props().disabled
    ).toEqual(true);
  });
  
});
