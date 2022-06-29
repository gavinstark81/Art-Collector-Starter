import React, { useEffect, useState } from "react";

/**
 * Don't touch these imports!
 */
import {
  fetchAllCenturies,
  fetchAllClassifications,
  fetchQueryResults,
} from "../api";

const Search = (props) => {
  // Make sure to destructure setIsLoading and setSearchResults from the props
  // const [searchResults, setSearchResults] = useState;
  // const [isLoading, setIsLoading] = useState;
  const [centuryList, setCenturyList] = useState([]);
  const [classificationList, setClassificationList] = useState([]);
  const [queryString, setQueryString] = useState("");
  const [century, setCentury] = useState("any");
  const [classification, setClassification] = useState("any");

  /**
   * We are at the Search component, a child of app. This has a form, so we need to use useState for
   * our controlled inputs:
   *
   /**
   * Inside of useEffect, use Promise.all([]) with fetchAllCenturies and fetchAllClassifications
   *
   * In the .then() callback pass the returned lists to setCenturyList and setClassificationList
   *
   * Make sure to console.error on caught errors from the API methods.
   */
  useEffect(() => {
    try {
      Promise.all([fetchAllCenturies, fetchAllClassifications]);
      console.log("We caught an error!", useEffect);
    } catch {}
  }, []);

  /**
   * This is a form element, so we need to bind an onSubmit handler to it which:
   *
   * calls event.preventDefault()
   * calls setIsLoading, set it to true
   *
   * then, in a try/catch/finally block:
   *
   * try to:
   * - get the results from fetchQueryResults({ century, classification, queryString })
   * - pass them to setSearchResults
   *
   * catch: error to console.error
   *
   * finally: call setIsLoading, set it to false
   */
  return (
    <form
      id="search"
      onSubmit={async (event) => {
        // write code here
      }}
    >
      <fieldset>
        <label htmlFor="keywords">Query</label>
        <input
          id="keywords"
          type="text"
          placeholder="enter keywords..."
          // TODO UN-comment and fill in the correct value:
          // value={/* this should be the query string */}
          // TODO UN-comment and fill in the correct onChange function
          // onChange={/* this should update the value of the query string */}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="select-classification">
          Classification{" "}
          <span className="classification-count">
            ({classificationList.length})
          </span>
        </label>
        <select
          name="classification"
          id="select-classification"
          // TODO UN-comment the value property, and pass it the correct value
          // value={/* this should be the classification */}
          // TODO UN-comment and fill in the correct onChange function
          // onChange={/* this should update the value of the classification */}
        >
          <option value="any">Any</option>
          {/* map over the classificationList, return an <option /> */}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="select-century">
          Century <span className="century-count">({centuryList.length})</span>
        </label>
        <select
          name="century"
          id="select-century"
          // TODO UN-comment the value property, and pass it the correct value
          // value={/* this should be the century */}
          // TODO UN-comment and fill in the correct onChange function
          // onChange={/* this should update the value of the century */}
        >
          <option value="any">Any</option>
          {/* map over the centuryList, return an <option /> */}
        </select>
      </fieldset>
      <button>SEARCH</button>
    </form>
  );
};

export default Search;
