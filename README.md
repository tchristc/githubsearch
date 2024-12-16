# GitHub Search
## Description
Originally created to pull the number of pull requests associated with a owner/repository.
I added inputs for owner, repo name, resource (not tested), page size, and page.
Request URL is displayed, followed by resources displayed in a grid, and finally a total row.
The pagination is clunky but I don't have the time to fix currently.

## Testing
* npm run dev
* browse to http://localhost:5174/ (or whatever vite decides)
* NOTE: REACT_APP_API_KEY needs to be set to your PAT token in the root/.env (security :-) 
