# CraftBrew

## Perform migrations

```
$ docker compose run backend manage.py migrate
```

## Create superuser for djano admin panel
```
$ docker compose run backend manage.py createsuperuser
```

## Deploy with docker compose
```
$ docker compose up -d
```


## Expected result
Listing containers must show 2 containers running and the port mapping as below:
```

$ docker ps
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS                                       NAMES
ca2d113910c2   craft-brew-backend     "python3 manage.py r…"   38 seconds ago   Up 32 seconds   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp   craft-brew-backend-1
983bc4d2f8fc   postgres:15.2-alpine   "docker-entrypoint.s…"   4 minutes ago    Up 32 seconds   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   craft-brew-db-1
```

Stop and remove the containers
```
$ docker compose down
```
