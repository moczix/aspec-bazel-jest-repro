# ISSUE ASPECT DEV BAZEL JEST REPRODUCTION

the error is :
```exec ${PAGER:-/usr/bin/less} "$0" || exit 1
Executing tests from //src/app/testowy-modul:test
-----------------------------------------------------------------------------
[31m[31m[1m[1m● [22m[1mValidation Error[22m:[39m[31m[39m
[31m[31m[39m[31m[39m
[31m[31m  Module [1m./setup-jest.js[22m in the [1msetupFilesAfterEnv[22m option was not found.[39m[31m[39m
[31m[31m         [1m<rootDir>[22m is: /home/moczniak/.cache/bazel/_bazel_moczniak/58ab6779564054db7e12387a1a071d0a/sandbox/linux-sandbox/1045/execroot/bla/bazel-out/k8-fastbuild/bin/src/app/testowy-modul/test.sh.runfiles/bla/src/app/testowy-modul[39m[31m[39m
[31m[31m[39m[31m[39m
[31m[31m  [1mConfiguration Documentation:[22m[39m[31m[39m
[31m[31m  https://jestjs.io/docs/configuration[39m[31m[39m
[31m[31m[39m[31m[39m
```

it doesnt see setup-jest.js, if we comment setupFilesAfterEnv, then we have error about not seeing tsconfig
because on src/testowy-module there is none.

i tried to use copy_to_bin but it not worked