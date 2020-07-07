# React - git hub search app

### Installation

> npm should be installed on your system
> then please run the following commands

```sh
$ git clone https://github.com/rahmanfasalu/github-search-app-react.git
$ cd github-search-app-react
$ npm start
```

> open http://localhost:8080/ in your browser to view the app

# Features

- Created app from the scratch, not used Create-react-app or any other boilerplate to create the app
- Not used any CSS framework for styling, instead created custom style using styled-component
- Github API comes with limited public accesss, but you can add your git-auth token in axios interceptor located at app/src/api/apiServices.ts (un-comment line number 8 & 9 and add your token)for unlimted access
- Added features like Search user, User detailed view page, Search repository, repo detailed view page etc.

### Tech

- React
- Redux
- TypeScript
- Styled-component
- React hooks
- session storage for caching
