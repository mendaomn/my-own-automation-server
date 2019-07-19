# my-own-automation-server

Implmentation of a simple automation server

## Architecture

An authenticated client can 

 - upload a Makefile with a name which will represent a pipeline
 - run a previously-uploaded pipeline referring it by name

The automation server can

 - store Makefiles
 - run make -f {pipeline file name}
 - store outputs of executions (exit code, stdout and stderr)

## Usage

- Run a pipeline by name: `POST /executions -D {"name": "speed-staging"}` --> executionID
- Upload a pipeline: `POST /pipelines -D {"name": "speed-staging", "file": %FILEBLOB%`
- List available pipelines `GET /pipelines` --> speed-staging, speed-prod, cas-test, cas-prod
- Check pipeline status: `GET /executions?id=executionID` --> (OK/KO, stdoud, stderr)

## CLI

```
automation-server <command> <args>

  commands:
    run             pipeline-name
      --watch, -w     runs check in watch mode
    upload          pipeline-name file-path
      --run, -r       run the pipeline right after uploading it
      --watch, -w     used along with --run, runs check in watch mode
    list
    check           execution-id
      --watch, -w     watch mode
```