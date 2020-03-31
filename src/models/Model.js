import { inject } from "../ioc-container"

export default class Model {
  constructor() {
    // every model has a dependency on the store
    this.store = inject('service::store');
  }
}
