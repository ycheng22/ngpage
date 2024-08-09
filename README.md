# Create project
1. `ng new ngpage --create-application=true`
2. `npm start`
3. Creating repo in Github manually, link the repo
    -  `git remote add origin https://github.com/ycheng22/ngpage.git`
    - `git push -u origin master`
4. `ng add angular-cli-ghpages`
5. `ng deploy --base-href=/ngpage/ --repo=https://github.com/ycheng22/ngpage.git`
6. Web link:　https://ycheng22.github.io/ngpage/
7. Adding Tailwind: https://tailwindcss.com/docs/guides/angular
   
# Pipeline
- Create new feature branch and develop
- PR to master branch
- Deploy from master branch


# Quick links
- Angular: https://v17.angular.io/docs
- 

<details>
    <summary>Ng Doc</summary>
    
# Ngpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

</details>


