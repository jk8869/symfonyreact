# Synfony React

This is a simple dashboard build by symfony for backedn and react for frontend

## Installation

for settingup an exting symfony project please refer to  [settin up](https://symfony.com/doc/current/setup.html#setting-up-an-existing-symfony-project)

To run backend server after install symfony:
```bash
cd backend 
```
then run:

```bash
syfmony server:start
```

To run frontend server:
```bash
cd frontend
```
then run:

```bash
yarn
```
after than run:
```bash
yarn start
```

there is also a docker file on root of project as well as related docker directory and you can use it

## Backend Document

To generate dummy data you can call /data

This will point to DataController and inside index function we generates data for all necessary tables

There is an Abstract class named AbstractEntity to keep common fields for Entity clasees

There is also Interface including getTimeFrameData which is implemented by CustomerRepository and OrderRepository to get data for timeframe chats in fornend

## Frontend Document

For frontend side all interaction between app an api controls with redux, redux-saga
Ther is an Api class to implement out api requests

And all actions, reudcer, sagas are defined in redux folder
