"Shows how to use ts_project(tsc=ngc) to make a drop-in replacement for ng_module/ts_library(use_angular_plugin)"

load("//tools/bazel:typescript.bzl", "ts_project")

def ng_ts_project(name, tsconfig, srcs = [], angular_assets = [], deps = [], **kwargs):
    ts_project(
        name = name,
        tsconfig = tsconfig,
        tsc = "//tools/bazel:ngc",
        source_map = True,
        srcs = srcs + angular_assets,
        deps = deps + ["//:node_modules/tslib"],
        **kwargs
    )
