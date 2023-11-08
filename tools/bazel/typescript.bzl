"""Helper macros for compiling typescript with consistent config"""

load("@aspect_rules_ts//ts:defs.bzl", _ts_project = "ts_project")

def ts_project(name, tsconfig = "//src:tsconfig", **kwargs):
    _ts_project(
        name = name,
        tsconfig = tsconfig,
        transpiler = "tsc",
        declaration = True,
        declaration_map = True,
        **kwargs
    )
