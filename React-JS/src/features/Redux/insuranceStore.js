// actions (forms)
const CREATE_POLICY = "createPolicy";
const DELETE_POLICY = "deletePolicy";
const CLAIM_POLICY = "claimPolicy";

// Drop off a form (action creators)
const createPolicy = function (fullName, amount) {
  return {
    type: CREATE_POLICY,
    payload: {
      fullName,
      amount,
    },
  };
};

const deletePolicy = function (fullName) {
  return {
    type: DELETE_POLICY,
    payload: fullName,
  };
};

const claimPolicy = function (fullName, amountToCollect) {
  return {
    type: CLAIM_POLICY,
    payload: {
      fullName,
      amountToCollect,
    },
  };
};

// Reducers (Departments)

const policyListReducer = function (oldListOfPolicies = [], action) {
  switch (action.type) {
    case CREATE_POLICY: {
      return [...oldListOfPolicies, action.payload];
    }

    default: {
      return [...oldListOfPolicies];
    }
  }
};

const deletePolicyReducer = function (oldListOfPolicies, action) {
  switch (action.type) {
    case DELETE_POLICY: {
      const newListOfPolicies = oldListOfPolicies.filter(
        (policy) => policy.fullName !== action.payload
      );
      return newListOfPolicies;
    }

    default: {
      return [...oldListOfPolicies];
    }
  }
};

const claimPolicyListReducer = function (oldListOfClaimPolicies = [], action) {
  switch (action.type) {
    case CLAIM_POLICY: {
      return [...oldListOfClaimPolicies, action.payload];
    }

    default: {
      return [...oldListOfClaimPolicies];
    }
  }
};

const accountReducer = function (bagOfMoney = 100, action) {
  switch (action.type) {
    case CREATE_POLICY: {
      return bagOfMoney + action.payload.amount;
    }

    case CLAIM_POLICY: {
      return bagOfMoney - action.payload.amountToCollect;
    }

    default: {
      return bagOfMoney;
    }
  }
};

// Combine All Reducers
const rootReducer = Redux.combineReducer({
  account: accountReducer,
  policyList: policyListReducer,
  claimPolicyList: claimPolicyListReducer,
});

// Set up the Store
const store = Redux.createStore(rootReducer);

// Dispatch Actions
store.dispatch(createPolicy("Alex Sam", 20));
store.dispatch(createPolicy("Jack Adam", 60));
store.dispatch(createPolicy("Martha Jones", 100));

store.dispatch(claimPolicy("Alex Sam", 100));
store.dispatch(claimPolicy("Jack Adam", 90));
store.dispatch(deletePolicy("Martha Jones"));
