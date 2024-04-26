// actions (forms)
const CREATE_POLICY = "createPolicy";
const DELETE_POLICY = "deletePolicy";
const CLAIM_POLICY = "claimPolicy";

// Drop off a form (action creators)
const createPolicy = function (policyName, amount) {
  return {
    type: CREATE_POLICY,
    payload: {
      policyName,
      amount,
    },
  };
};

const deletePolicy = function (policyName) {
  return {
    type: DELETE_POLICY,
    payload: policyName,
  };
};

const claimPolicy = function (policyName, amountToCollect) {
  return {
    type: CLAIM_POLICY,
    payload: {
      policyName,
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
        (policy) => policy.policyName !== action.payload
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

const rootReducer = combineReducer({
  account: accountReducer,
  policyList: policyListReducer,
  claimPolicyList: claimPolicyListReducer,
});

const store = createStore(rootReducer);
