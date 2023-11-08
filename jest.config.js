const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.bazel.json');
const { getTsconfig } = require('get-tsconfig')
// this is beacause of yarn link libraries instead of use file: in package.json
// so then when we link to library outside of our node_modules
// the linked library want to use their node_modules/@angular/* instances
// instead of ours in nx dir
// preserveSymlinks: true in angular.json doesnt work here

const tsConfigSpecMock = getTsconfig(process.cwd(), 'tsconfig.spec-mock.json');


module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: Object.assign(
    {
      'rxjs/internal/observable/innerFrom': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
      'rxjs/internal/util/args': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
      'rxjs/internal/util/identity': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
      'rxjs/internal/util/lift': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js'
    },
    pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    pathsToModuleNameMapper(tsConfigSpecMock.config.compilerOptions.paths, { prefix: `${process.cwd()}` })
  ),
  transformIgnorePatterns: ['!node_modules/'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  setupFilesAfterEnv: ['./setup-jest.js'],
  coverageReporters: ['html'],
  coveragePathIgnorePatterns: ['/testing/'],
  coverageDirectory: 'coverage',
  globals: {
    skipNgcc: false,
    tsconfig: './tsconfig.spec.json',
    'ts-jest': {
      isolatedModules: true
    }
  },
  maxWorkers: '50%',
  reporters: [
    'default',
  ]
};
