# Setup

## Client 

Client-side application that consists of 2 routes:

- Root (`/`), where

    - User can view products list requested from GraphQL endpoint

    - Each product has title, image and price

    - User can search products by title

    - User can sort products

    - Add pagination (e.g. 10 products per page)

- Detailed product page (`/product/:productId`), where:

    - User can view full list of product details


## Server

GraphQL layer, which satifies aforementioned client needs.


## Graphql schema

Graphql query:

```js
query {
  product {
    id
    title
    price
  }
}
```


# Files

* `/client` - client files
* `/server` - express with graphql + parcel middleware


# Getting Started

## `yarn`

Install packages.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
Open Graphql server [http://localhost:8080/graphql](http://localhost:8080/graphql) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.\