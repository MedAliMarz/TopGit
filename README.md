# TopGit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Choices

Concerning the Angular UI component library, I chose NG-ZORRO as it provide UI component based on Ant Design system.
I implemented a landing page which contain the list of commits, the commit-details page which shows the extra information about a selected commit (changed file, number of additions and deletions) and a modal component to show the details of the user 

Concerning the Github API, I opted to use the REST API by implementing a githubService that include 3 functions, to retrieve the commits of React project, to retrieve a commit details and to get the user information. 

## Project setup

To setup the project, Run 
```
git clone https://github.com/MedAliMarz/TopGit/
cd TopGit
```

To install dependencies, Run

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

