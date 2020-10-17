


<h1 align="center"> 
  API ADONISJS
</h1>
<p align="center">
  <a href="#main-technologies">Main technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements"> Requirements </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#to-run-locally">To run locally</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contribute">Contribute</a>
</p>

## Main technologies
1. NodeJS
2. [AdonisJS](https://adonisjs.com/docs/4.1/installation)
3. [Lucid ORM](https://adonisjs.com/docs/4.1/lucid): For querys on database, hooks and manage relationships
4. [Validator](https://adonisjs.com/docs/4.1/validator): For validation users input 
1. [PostgresSQL](https://www.postgresql.org/): The database used for save data

    ### For lint code
      - [Eslint](https://eslint.org/) 
      - [Prettier](https://prettier.io/)
      - [Husky](https://typicode.github.io/husky/#/)
      - [Git Commit Msg Linter](https://www.npmjs.com/package/git-commit-msg-linter)
      - [Lint-staged](https://github.com/okonet/lint-staged)

## Requirements 

1. [NodeJS >=8.0.0](https://nodejs.org/en/)
1. [Npm >= 3.0.0](https://www.npmjs.com/get-npm)
1. [Git](https://git-scm.com/)
1. [Adonis CLI](https://adonisjs.com/docs/4.1/installation)

## To run locally

1. In the terminal, clone the project:
```bash
git clone git@github.com:juliastefanoni/api-adonisjs.git
```

2. Enter the project folder:
```shell
cd api-adonisjs
```

3. Install the dependencies:
```shell
npm install
```

or 
```shell
yarn install
```

4. CCopy .env.example by running:

- For mac/linux:
```
cp .env.example .env
```

- For windows: 
```
copy .env.example .env
```

5. Open the .env file and fill in your environment variables

6. Run ```adonis migration:run``` to run the migrations

7. Run ```adonis serve --dev``` to run the server locally.

The server will be available at http://127.0.0.1:3333

<br>

## Endpoints 

<p align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API%20Adonis&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjuliastefanoni%2Fapi-adonisjs%2Fmaster%2F.github%2FInsomnia.json%3Ftoken%3DAM2N2OKYHTRAORYH6YKO66K7RMIZK)

</p>


See the api's documentation at: https://www.apimatic.io/apidocs/adonis-api

## Contribute

Contributions to the project are highly appreciated. For this:

- Fork the project

- Create a branch for your feature
```
git checkout -b feature
```

- Add changes
```
git add . 
```

- _Commit_ changes in the pattern [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
```
git commit -m 'Feat: Add feat X'
```

- Push the branch
```
git push origin feature
```

- Open a Pull Request

<br>

## License

The [MIT License]() (MIT)
