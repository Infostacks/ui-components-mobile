![image](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)

# getting started

```sh
npx i
```

# app

```sh
# web
npm run storybook:web
```
```sh
# ios
npm run storybook:ios

# android
npm run storybook:android
```

# Web

Start react native web storybook:

```
npm run storybook:web
```

build react native web storybook:

```sh
npm run build-storybook
```

# Deploy Storybook Web
```sh
npm run predeploy

npm run deploy-storybook
```

# Overall Functionality
- This repository is a complete storybook app which contains
    multiple  stories for various components. You can add more stories to the `Components/package` directory as per your requirement.
- Components directory contains all the components that can be used in any other react-native project.
- To create a build of  your component, you need to add it inside the `Components` folder and then use it by importing. Rollup will create build of only components that are in `Components/package` folder.