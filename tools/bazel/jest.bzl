load("@aspect_rules_jest//jest:defs.bzl", _jest_test = "jest_test")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

def jest_test(name, srcs, deps, jest_config, **kwargs):




    _jest_test(
        name = name,
        config = jest_config,
        auto_configure_reporters = False,
        data = srcs + deps + [
          # "//:copy_readme",
          "//:setup-jest",

          "//:node_modules/jest-environment-jsdom",
          "//:node_modules/jest-preset-angular",
          "//:node_modules/jsdom",
          "//:node_modules/get-tsconfig",
        ],
        node_modules = "//:node_modules",
        **kwargs
    )

