Live Demo:  https://sparkling-tiramisu-12d8f4.netlify.app/

### Build the Docker Image


```bash
docker build -t challenge-app .
```


### Run the Application


```bash
docker run --rm -v "$(pwd):/usr/src/app" challenge-app
```

