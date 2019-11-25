### My own private localhost 3000 piece of shit

#### Git ...

To reset git authentication and get rid of it, type this

```
git config credential.helper store
```

then retype your credentials when prompted

#### Check HTML page with no hot reloading

On Mac

```
open ./src/index.html
```

On PC

```
start ./src/index.html
```

#### Browserslist query

To get adpated browsers list, combined with <code>'@babel/polyfill'</code>, type for instance:

```
npx browserslist "last 2 versions, not dead, not < 2%"
```

Sends back a list of browsers having a a quite current version, still maintained with more than 2% marketshare
