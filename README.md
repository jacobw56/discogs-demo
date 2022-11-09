# Discogs demo

## Build instructions

First, you'll need to have [git](#install-git) and [node](#install-node) installed, and since I did this all on [ubuntu](https://ubuntu.com), although it will work identically for [debian](https://debian.org) or any debian-derived distro. I recommend you do the same if you can, although you should be fine with a Mac, or by using [WSL](#install-wsl) if you are a Windows person.

Once you are all set, clone this repo

```sh
git clone git@github.com:jacobw56/discogs-demo.git
```

then hop in and install all the necessary packages

```sh
cd discogs-demo
npm install
```

Now you can play around with your favorite editor. I prefer [vim]() (I would) or [Visual Studio Code](https://code.visualstudio.com), which you can very easily use by typing

```sh
code .
```

If you want to start up the demo, it's just

```sh
npm start
```

<a name="install-git"></a>

## Installing git

These instructions are for ubuntu or debian, consult the instructions for you operating system accordingly.

First, always update `apt`

```sh
sudo apt update
```

then install git

```sh
sudo apt install git
```

<a name="install-node"></a>

## Installing node using nvm

Check the nvm repo for the latest version and instructions.

First download the package

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

then logout and log back in, or run the following to get the environment set up correctly

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
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

<a name="install-wsl"></a>

## Installing WSL if you are using Windows

Consult the [official install docs](https://learn.microsoft.com/en-us/windows/wsl/install) if you run into trouble.

First, fire open Command Prompt (search for it in your Start menu) or PowerShell and install ubuntu via wsl

```sh
wsl --install -d Ubuntu
```

Alternatively, try out debian if you prefer stability over novelty

```sh
wsl --install -d Debian
```
