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
    handleSubmit: fn => fn,
    onSubmit: jest.fn(),
  },
  store = createStore(
    combineReducers({ form: formReducer })
  ),
  Decorated = reduxForm({
    form: "login"
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

  it("Buttons should be disabled", () => {
    expect(
      wrapper.find(
        "button"
      ).at(0).props().disabled
    ).toEqual(true);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toEqual(true);
  });


  it('Buttons should not be disabled if any changes', () => {
      const firstInput = wrapper.find('input').first();
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
  })

});
