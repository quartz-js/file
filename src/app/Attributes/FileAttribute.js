import { Attributes } from '@railken/quartz-core'
import { FileApi } from './../Api/FileApi'

export class FileAttribute extends Attributes.BelongsTo {
  constructor (name, options) {
    super(name, new FileApi())

    this.resourceConfig = () => { return require('./../Managers/FileManager').default };

    this.createComponent = {
      component: () => import('../../components/file/Resource/create')
    }

    this.updateComponent = {
      component: () => import('../../components/file/Resource/edit')
    }
  }
};
