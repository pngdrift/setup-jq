import * as core from '@actions/core'
import * as installer from './app-installer'
import * as os from 'os'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    core.debug(`version ${version} platform:${os.platform()}, arch:${os.arch()}`)
    await installer.install(version)
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
