import { ServiceProvider } from '@railken/quartz-core'
import { container } from '@railken/quartz-core'

export class FileServiceProvider extends ServiceProvider {
  register() {

    this.addRoutes('app', require('./../../routes/file.js'))

    this.addData({
      name: 'file',
      icon: require('../../assets/file-icon.svg'),
      tags: ['data'],
      route: { name: 'files.index' },
    })

    this.addLang({
      'en': require('../../../lang/file/en.json'),
      'it': require('../../../lang/file/it.json')
    })
  }
}