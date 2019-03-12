# Let's join forces

1. Fork this repo.
2. Clone your fork of this repo

```shell
git clone git@github.com:<github username>/web-dave-components.git
```

3. Define an `upstream` remote pointing back to
   this repo that you forked in the first place.

```shell
git remote add upstream https://github.com/web-dave/web-dave-components.git
```

4. Installing NPM Modules

```shell
npm install
```

5. Implement your feature
6. Update your master with the latest upstream version

```shell
git pull --ff upstream master
```

7. Send a PR

```shell
git push origin
```
