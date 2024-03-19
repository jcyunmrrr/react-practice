# Refresh the website automatically

*Lesson 7*

Do this **in the project folder**:

```console
live-server <folder name>
```

In project-01, the folder name is `public`.

```console
live-server public/
```



# Detect changes in JSX file automatically

*Lesson 9*

Do this **in the project folder**:

```
babel <JSX file> --out-file=<target file> --presets="@babel/preset-env,@babel/preset-react" --watch
```

In project-01, the command is like:

```
babel src/app.js --out-file=public/scripts/app.js --presets="@babel/preset-env,@babel/preset-react" --watch
```



# Create package.json and install modules

*Lesson 9*

For each project, you must first do this **in the project folder**: 

```
yarn init
```

And you will see messages like this. Keep hitting enter.

```
yarn init v1.22.22
question name (01_indecision-app):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private:
```

And `package.json` file will be created.

Next time you get something without `node_modules` folder in it, just do this:

```
yarn install
```

And `node_modules` folder will be created.