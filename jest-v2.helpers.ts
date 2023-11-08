import { lstatSync, readdirSync } from 'fs';
import { TsConfigResult, getTsconfig } from 'get-tsconfig';
import type { Config } from 'jest';
import { join } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';

export function getProjectConfig(displayName: string): Config {
  const tsConfig: TsConfigResult = getTsconfig(process.cwd(), 'tsconfig.json')!;
  const tsConfigSpecMock: TsConfigResult = getTsconfig(process.cwd(), 'tsconfig.spec-mock.json')!;

  return {
    displayName: displayName,
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: [join(process.cwd(), 'jest-v2.setup.ts'), join(process.cwd(), '/node_modules/jest-offline')],
    transform: {
      '^.+\\.(ts|mjs|js|html)$': [
        'jest-preset-angular',
        {
          tsconfig: `${join(process.cwd(), 'tsconfig.spec.json')}`,
          stringifyContentPathRegex: '\\.(html|svg)$'
        }
      ]
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
      'jest-preset-angular/build/serializers/no-ng-attributes',
      'jest-preset-angular/build/serializers/ng-snapshot',
      'jest-preset-angular/build/serializers/html-comment'
    ],
    modulePaths: [tsConfig.config.compilerOptions!.baseUrl!], // <-- This will be set to 'baseUrl' value
    moduleNameMapper: {
      ...pathsToModuleNameMapper(tsConfig.config.compilerOptions!.paths!, { prefix: `${process.cwd()}` }),
      ...pathsToModuleNameMapper(tsConfigSpecMock.config.compilerOptions!.paths!, { prefix: `${process.cwd()}` })
    },
    maxWorkers: '70%'
  };
}

function findJestConfig(projects: string[], path: string): void {
  for (const item of readdirSync(path)) {
    if (item === 'jest.config.ts') {
      projects.push(join(path, 'jest.config.ts'));
    }
    if (lstatSync(join(path, item)).isDirectory()) {
      findJestConfig(projects, join(path, item));
    }
  }
}

export function getProjects(): string[] {
  const projects: string[] = [];
  findJestConfig(projects, join(process.cwd(), 'packages_v2'));
  findJestConfig(projects, join(process.cwd(), 'apps_v2'));

  const projectsWithRootDir: string[] = projects.map(
    (project: string) => `<rootDir>${project.split(process.cwd())[1]}`
  );
  return projectsWithRootDir;
}
