import { ServiceProvider } from '@quartz/core'
import { container, Attributes, Interceptor } from '@quartz/core'
import { FileApi } from '../Api/FileApi'
import _ from 'lodash'

export class FileServiceProvider extends ServiceProvider {
  register() {

    // this.registerComponent("FileResourceIndex", require('../../components/ResourceIndex').default)

    /*
    Interceptor.add('managerOnCreate', data => {

      if (data.view.require === 'file') {

        let attribute = new Attributes.File('file', new FileApi())
          .set('fillable', true)
          .set('style', {
            extends: 'data-view-attribute-input'
          })
          
        data.manager.addAttribute(attribute)
      }

      return data
    })*/
  }

}