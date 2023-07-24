import path from 'path'
import { BranchConfig, Package } from './types'

// TODO: List your npm packages here. The first package will be used as the versioner.
export const packages: Package[] = [
  {
    name: '@nedasobhani/rtl-tanstack-core-table',
    packageDir: 'table-core',
    srcDir: 'src',
  },
  {
    name: '@nedasobhani/rtl-tanstack-react-table',
    packageDir: 'react-table',
    srcDir: 'src',
    dependencies: ['@tanstack/table-core'],
  },
]

export const latestBranch = 'main'

export const branchConfigs: Record<string, BranchConfig> = {
  main: {
    prerelease: false,
    ghRelease: true,
  },
  next: {
    prerelease: true,
    ghRelease: true,
  },
  beta: {
    prerelease: true,
    ghRelease: true,
  },
  alpha: {
    prerelease: true,
    ghRelease: true,
  },
}

export const rootDir = path.resolve(__dirname, '..')
export const examplesDirs = [
  'examples/react',
  'examples/solid',
  'examples/svelte',
  'examples/vue',
]
