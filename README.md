Live Demo:  https://sparkling-tiramisu-12d8f4.netlify.app/

> challenge_a generates output.txt
> challenge_b generates analysis_results.txt


### Build the Docker Image


```bash
docker build -t challenge-app .
```


### Run the Application


```bash
docker run -v ".:/usr/src/app/" challenge-app
```

## Or


### Using compose

```bash
docker-compose up -d
```

### To view the logs (Long output, Might crash the terminal)

```bash
docker-compose logs -f
````
> alternatively run the app with logs
> ```bash
>   docker-compose up
> ```
>


