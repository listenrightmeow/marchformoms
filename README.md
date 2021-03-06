### Installation

The following command manages all installation requirements detailed below

```
./installation.sh
```

### Requirements

[Ansible](https://www.ansible.com/)
[Homebrew](https://brew.sh/)
[NVM](https://github.com/creationix/nvm#installation)
[Grunt](https://gruntjs.com/)
[Python](https://www.python.org/)

### Responsibilities

```
Ansible: secret management injected into the React application through Webpack with Vault
Grunt: application automation and secret management
```

### Running the application

Port `8000` is utilized for local development.

```
grunt start --env=ENVIRONMENT
```

#### Override React PORT

```
grunt start --port=PORT
```
