import { useEffect, useState } from "react";
import "./App.css";

// Discogs URL builder values
const discogs_base_url = "https://api.discogs.com";
const discogs_api_search_ep = "/database/search?q=";
const discogs_api_search_year = "&year=";
const discogs_api_auth_token =
  "&token=BpxKtStZfCzWlTAFqhbHxFqIJckGxLrrdcpvoMDS"; // Never do this for real

/**
 *
 * @param {string} str
 * @param {integer} year
 * @returns Discogs API URL string
 */
const getDiscogsURLSearchByYear = (str, year) => {
  return (
    discogs_base_url +
    discogs_api_search_ep +
    str +
    discogs_api_search_year +
    year +
    discogs_api_auth_token
  );
};

const App = () => {
  /* We will use a state variable to store the data and display it below */
  const [album, setAlbum] = useState();

  /* This hook will run once on page load (because of the empty array in the
     second paramter). We query "lauper" and the year 1984, then get a somewhat
     random album from the first page of results. */
  useEffect(() => {
    fetch(getDiscogsURLSearchByYear("lauper", 1984))
      .then((response) => response.json())
      .then((data) => {
        let max =
          data.pagination.items < data.pagination.per_page
            ? data.pagination.items
            : data.pagination.per_page;
        if (max > 0) {
          let index = Math.floor(Math.random() * max);
          console.log(data);
          setAlbum(data.results[index].title);
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">{album}</header>
    </div>
  );
};

export default App;
