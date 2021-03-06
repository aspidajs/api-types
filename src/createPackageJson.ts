import fs from 'fs'
import path from 'path'
import { version } from '../package.json'
import { Attributes } from './createReadme'

export const createPackageJson = (
  input: string,
  attributes: Attributes,
  packageName: string,
  org: string,
  name: string
) => {
  const prevJsonPath = path.resolve(input, 'package.json')
  return JSON.stringify(
    {
      name: packageName,
      version: `${version.split('.').slice(0, -1).join('.')}.${
        fs.existsSync(prevJsonPath) ? require(prevJsonPath).version.split('.').pop() : 0
      }`,
      description: `${attributes.title} - ${attributes.description}`,
      license: 'MIT',
      main: 'dist/$api.js',
      types: 'dist/$api.d.ts',
      homepage: attributes.homepage,
      repository: {
        type: 'git',
        url: 'git+https://github.com/aspida/api-types.git'
      },
      bugs: {
        url: 'https://github.com/aspida/api-types/issues'
      },
      files: ['dist'],
      keywords: [org, name, 'typescript', 'api-types', 'aspida'],
      publishConfig: {
        access: 'public'
      }
    },
    null,
    2
  )
}
