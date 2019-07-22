# Yet Another CI

In the quest of understanding a bit better the world of Continuous Integration, I started wondering how would a simple CI work. 

What better way to learn something new than to get one's hands dirty and code an automation server from scratch!

In this project I'll be building:

 - an Automation Server, exposing RESTful endpoints to create and run pipelines
 - a Command Line Interface, acting as client, to make it easy to actually use the CI in a real project
  
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