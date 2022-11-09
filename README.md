# Discogs demo

## Build instructions

First, you'll need to have git and node installed, and since I did this all on Ubuntu, I recommend you do the same if you can, although you should be fine with a Mac, or by using WSL if you are a Windows person.


## Installing node using nvm

Check the nvm repo for the latest version and instructions.

First download the package

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

then logout and log back in, or run the following to get the environment set up correctly

```sh
k
```

Now install the latest long term support (LTS) version of node

```sh
nvm install --lts
```

and mark it as the one to use

```sh
nvm use --lts
```

Now check the version looks right

```sh
node -v
```

