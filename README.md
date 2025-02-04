Live Demo:  https://sparkling-tiramisu-12d8f4.netlify.app/

> challenge_a generates output.txt
> challenge_b generates analysis_results/results.txt

> I'm following the wording of challenge C strictly which implies that output of challenge A should be present in the directory and the docker container should only excute the script for challenge B.
## Using compose

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

## Or

### Build the Docker Image


```bash
docker build -t challenge-app .
```


### Run the Application


```bash
docker run -v "./analysis_results:/usr/src/app/analysis_results" challenge-app
```

