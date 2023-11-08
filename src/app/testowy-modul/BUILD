load("//tools/bazel:angular_ts_project.bzl", "ng_ts_project")
load("//tools/bazel:jest.bzl", "jest_test")

package(default_visibility = ["//:__subpackages__"])

ng_ts_project(
    name = "testowy-modul",
    srcs = glob(
        ["**/*.ts"],
        exclude = ["**/*.spec.ts", "jest.config.ts"],
    ),
    angular_assets = glob([
        "**/*.html",
        "**/*.scss",
    ]),
    tags = ["buildable_lib"],
    tsconfig = "//:tsconfig.bazelify",
    deps = [
      "//:node_modules/@angular/common",
      "//:node_modules/@angular/core",
    ],
)


jest_test(
    name = "test",
    srcs = glob(
        ["**/*.spec.ts",],
    ) + glob(["__snapshots__/*.snap"]),
    jest_config = "//:jest_config",
    tags = ["testable_lib"],
    deps = [
        ":testowy-modul",
        
    ],
)