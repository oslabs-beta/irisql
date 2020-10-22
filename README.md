# IrisQL

![Image of Logo](/public/images/IrisQL-Logo-4-Horizontal-big.png)


## IrisQL

IrisQL is a GraphQL prototyping tool that auto-generates GraphQL schema through an interactive GUI. IrisQL lets users input object types and fields, as well as their relationships to other object types. It visualizes those objects and relationships in a dynamic, force-directed graph.


## Get Started

Open our app - <a class="nav-link" href="https://www.irisql.dev/">https://www.irisql.dev</a>

- Click the Get started button on our landing page.

- Create your first GraphQL Object Type by giving the object a name and fields of your choice*.

![Creating Object](https://media.giphy.com/media/tcPsbrtLmuz47oiORV/giphy.gif)

- Create another object and make a relationship between objects by adding related fields. If you check the "Relation" box, a dropdown will ask you to select your related object type and field, which will be shown on the graph with a link.

![Creating Relations](https://media.giphy.com/media/bdbnKv7M1VQWMzYzIa/giphy.gif)

- Click on nodes from the graph to update their name and fields. 

![Update Object](https://media.giphy.com/media/c4j7zqsMtIKCcmW9r6/giphy.gif)

- Toggle the database choice in the top right of the object type form between MongoDB(default) and PostgreSQL. This will be updated in your code.

![Database Choice](https://media.giphy.com/media/qPtUGtZRUUBEXfdXHp/giphy.gif)

- View your auto-generated code by clicking on the view code button on the bottom left. You will have a complete GraphQL schema generated for you. 

![View Generated Code](https://media.giphy.com/media/aBQFg0bupbQr2Kxksy/giphy.gif)

- Copy and paste the auto-generated code into your project. 

- If you would like to test the schema, you can use our built-in test server in irisql/server/test_server. To use the test server, navigate to localhost:3000/graphql and query from the GraphiQL interface.

![Use Test Server](https://media.giphy.com/media/7TfjnM5EQtGMPWWG60/giphy.gif)

\* It is worth noting that due to the limitations of our D3 visualization library, all field and object names must be unique. Our application will warn you if you try to enter duplicates. This is an area for improvement for our next major update. 


## Built With

- React: Router, Hooks, Context
- Node/Express
- GraphQL
- MongoDB/PostgreSQL
- D3
- Jest, Enzyme, Supertest
- Webpack
- Docker
- Heroku
- SCSS, Bootstrap
- CodeMirror
- ...blood, sweat, and tears of an amazing engineering team

## Contributions

We are extremely excited to make this available to the open-source community. The members of IrisQL would love to hear from you. If you would like to contribute, 

1. Fork this repository.

2. Clone the the repo onto your local machine. 

3. Open the directory and run `npm install`.

4. Run the application with `npm run dev`.

5. You will be able to view the app on `localhost:8080`.

6. Test and improve the app.

7. Submit a pull request to the staging branch of this repo for review. 

#### Some ways you can contribute

- Fix bugs
- Add features
- Submit GitHub issues
- Spread the word!


## Authors
- <a class="nav-link" href="https://www.linkedin.com/in/alexanderkim1/">Alexander Kim</a>
- <a class="nav-link" href="https://www.linkedin.com/in/binishali/">Binish Ali</a>
- <a class="nav-link" href="https://www.linkedin.com/in/liamemcbride/">Liam McBride</a>
- <a class="nav-link" href="https://www.linkedin.com/in/ronnie-zhang">Ronnie Zhang</a>
- <a class="nav-link" href="https://www.linkedin.com/in/stefanpougatchev/">Stefan Pougatchev</a>
