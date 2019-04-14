import { ServiceProvider } from '@railken/quartz-core'
import { container, Attributes, Interceptor } from '@railken/quartz-core'
import { FileApi } from '../Api/FileApi'
import _ from 'lodash'

export class FileServiceProvider extends ServiceProvider {
  register() {

    this.registerComponent("FileResourceIndex", require('../../components/ResourceIndex').default)

    Interceptor.add('managerOnCreate', data => {

      _.map(data.manager.descriptor, (descriptor, key) => {
        if (descriptor.type === 'file') {

          let attribute = new Attributes.File(key, new FileApi())
            .set('fillable', true)
            .set('style', {
              extends: 'data-view-attribute-input'
            })

          data.manager.addAttribute(attribute)
        }
      })

      return data
    })

    Interceptor.add('resourceIndexOnRetrieve', data => {

      _.map(data.manager.descriptor, (descriptor, key) => {
        if (descriptor.type === 'file') {
          data.component = 'FileResourceIndex'
        }
      })

      return data
    })
  }

}