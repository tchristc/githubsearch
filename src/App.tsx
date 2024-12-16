import { useState } from "react";
import "./App.css";
import { GitHubRepoSearch, PullRequestResult } from "./GitHubRepoSearch.ts";

function App() {
  const [pulls, setPulls] = useState({
    data: [],
    total: 0,
    requestUrl: "",
  } as PullRequestResult);
  const [owner, setOwner] = useState("lodash");
  const [repo, setRepo] = useState("lodash");
  const [resource, setResource] = useState("pulls");
  const [pageSize, setPageSize] = useState("5");
  const [page, setPage] = useState("1");

  async function FetchData() {
    const result = await GitHubRepoSearch(owner, repo, resource, pageSize, page);
    setPulls(result);
  }

  return (
    <>
      <div className="card">
        <div className="card card-header mb-3">GitHub Repo Search</div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="Owner..."
            aria-label="Owner"
          />
          <input
            type="text"
            className="form-control"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="Repository..."
            aria-label="Repository"
          />
          <input
            type="text"
            className="form-control"
            value={resource}
            onChange={(e) => setResource(e.target.value)}
            placeholder="Resource..."
            aria-label="Resource"
          />
          <input
            type="text"
            className="form-control"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            placeholder="Page Size..."
            aria-label="Page Size"
          />
          <input
            type="text"
            className="form-control"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            placeholder="Page..."
            aria-label="Page"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={async () => await FetchData()}
          >
            Search
          </button>
        </div>
        <div className="mb-3"><b>Request URL:</b> {`https://api.github.com/repos/${owner}/${repo}/${resource}?state=all&per_page=${pageSize}&page=${page}`}</div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {pulls.data.length === 0 && (
              <tr>
                <td colSpan={3}>No data</td>
              </tr>
            )}

            {pulls.data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.url}</td>
              </tr>
            ))}
            {pulls.data.length !== 0 && (
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td></td>
                <td>{pulls.total}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
