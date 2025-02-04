### Live Demo:  https://sparkling-tiramisu-12d8f4.netlify.app/

> challenge_a generates output.txt
>
> challenge_b prints output of the analysis to the console
>
> The docker script write the cconsole output to analysis_results.txt


### Build the Docker Image


```bash
docker build -t challenge-app .
```


### Run the Application with logs (Long output, Might crash the terminal)


```bash
docker run -v "./output:/usr/src/app/output" -v "./analysis_results:/usr/src/app/analysis_results" challenge-app
```
> alternatively run the app without logs
> ```bash
>   docker run -v "./output:/usr/src/app/output" -v "./analysis_results:/usr/src/app/analysis_results" -d challenge-app
> ```
>

## Or


### Using compose

```bash
docker-compose up 
```
> alternatively compose without logs
> ```bash
>   docker-compose up -d
> ```
>



