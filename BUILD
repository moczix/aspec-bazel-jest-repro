load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

exports_files(
    [
        "tsconfig.json",
        "tsconfig.spec.json",
        "tsconfig.spec-mock.json",
        "tsconfig.bazel.json",
        "jest.config.js",
        "setup-jest.js",
        "README.md"
    ],
    visibility = ["//visibility:public"],
)

# Link npm packages
npm_link_all_packages(name = "node_modules")

ts_config(
    name = "tsconfig.bazelify",
    src = "tsconfig.bazelify.json",
    visibility = ["//visibility:public"],
    deps = [
        "//:tsconfig.bazel.json",
        "//:tsconfig.json",
    ],
)

js_library(
    name = "setup-jest",
    srcs = ["setup-jest.js"],
    visibility = ["//visibility:public"],
)

# copy_to_bin(
#     name = "copy_tsconfigs",
#     srcs = [
#         "//:tsconfig.json",
#         "//:tsconfig.bazel.json",
#         "//:tsconfig.spec.json",
#         "//:tsconfig.spec-mock.json",
#     ],
#     visibility = ["//visibility:public"],
# )

copy_to_bin(
    name = "copy_readme",
    srcs = [
        "//:README.md"
    ],
    visibility = ["//visibility:public"],
)

js_library(
    name = "jest_config",
    srcs = ["jest.config.js"],
    visibility = ["//visibility:public"],
    deps = [
        
    ],
    data = [
        "//:tsconfig.json",
        "//:tsconfig.bazel.json",
        "//:tsconfig.spec.json",
        "//:tsconfig.spec-mock.json",
    ]
)
