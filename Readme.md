# https-redirect

https-redirect

## Usage

This will set up an http server on port `8080` which redirects all incoming
requests to the corresponding https url. The `-1` flags will make the http
server send `301` status code.

```shell
https-redirect -p 8080 -1
```

Show usage info:

```shell
https-redirect -h
```

## Install

```shell
npm install https-redirect -g
```

## License

[MIT](LICENSE)
