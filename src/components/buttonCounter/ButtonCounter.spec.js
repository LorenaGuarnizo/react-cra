import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as redux from "./ButtonCounter.redux";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Button Counter Component", () => {
  describe("actions", () => {
    it("should create an action to increment a the curreny counter", () => {
      const counter = 1;
      const store = mockStore({});
      const expectedAction = {
        type: redux.SET_INCREMENT,
        counter
      };

      store.dispatch(redux.setIncrement(counter));
      expect(store.getActions()).toEqual([expectedAction]);
    });

    it("should create an action to decrement a the curreny counter", () => {
      const counter = 1;
      const store = mockStore({});
      const expectedAction = {
        type: redux.SET_DECREMENT,
        counter
      };

      store.dispatch(redux.setDecrement(counter));
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  describe("reducers", () => {
    it("should return the initial state", () => {
      expect(redux.buttonReducer(undefined, {})).toEqual({ counter: 0 });
    });

    it("should handle SET_DECREMENT", () => {
      const action = {
        type: redux.SET_DECREMENT,
        counter: 1
      };

      expect(redux.buttonReducer([], action)).toEqual({ counter: 1 });
    });

    it("should handle SET_INCREMENT", () => {
      const action = {
        type: redux.SET_INCREMENT,
        counter: 1
      };

      expect(redux.buttonReducer([], action)).toEqual({ counter: 1 });
    });
  });
});
