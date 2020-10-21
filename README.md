# IrisQL

This app prototypes GraphQL queries. It enables developers to set up GraphQL quickly.

### To deploy container to Heroku

Type the following commands in the terminal being in project folder

- heroku login
- heroku container:login
- (only if you want to create a new app) heroku create
- heroku container:push web -a [name of the app]
- heroku container:release web -a [name of the app]
- heroku open -a [name of the app]
