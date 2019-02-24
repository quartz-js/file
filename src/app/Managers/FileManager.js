import { FileApi } from '../Api/FileApi'
import { Attributes, Manager } from '@railken/quartz-core'

export default new Manager({
  name: 'file',
  route: 'files',
  manager: new FileApi(),
  icon: require('../../assets/file-icon.svg'),
  attributes: [
    new Attributes.Id(),
    new Attributes.Base('name'),
    new Attributes.File('file', new FileApi()),
    new Attributes.Base('model_type'),
    new Attributes.Base('model_id'),
    new Attributes.DateTime('created_at'),
    new Attributes.DateTime('updated_at')
  ]
})
