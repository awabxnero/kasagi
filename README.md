# Kasagi


### Build the Docker Image


```bash
docker build -t challenge-app .
```


### Run the Application


```bash
docker run --rm -v "$(pwd):/usr/src/app" challenge-app
```

s