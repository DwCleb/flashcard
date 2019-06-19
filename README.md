
## Installing project

- Access the project folder and run any code below in terminal
```
npm i
```
or

```
yarn install
```

## Run project

- iOS (You need a mac for this)
```react-native run-ios```

- Android
```react-native run-android```

- Run metro bundle individually (optional, you need close terminal window opened by react-native run-android if would like use this)
```react-native start --reset-cache```
or
```npm start```
or
```yarn start```

### Project

This project use Redux, Saga, AsyncStorage, Ducks estructure

### Information!

The local notifications is setup to set the first notify in 5 minutes, after this the notify will repeat in interval by minutes. When the user finish the quiz the handle will bu called, cancel all notification and creating this new interval. (just setup to iPhone configurations)