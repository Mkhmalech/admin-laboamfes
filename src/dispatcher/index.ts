import { store } from '../index'

// fetch list tests
export const fetchLabTests = () =>
  store.dispatch({
    type: "@@labCatalog/CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS",
    path: "tests",
    payload: {
      query: `query{AllLabTests_fr{id name{fr}finance{Bcode}reference{Mnemonic CPT}}}`
    },
  });
