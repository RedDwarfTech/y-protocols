import { runTests } from 'rdlib0/testing'
import * as log from 'rdlib0/logging'
import * as awareness from './awareness.test.js'

import { isBrowser, isNode } from 'rdlib0/environment'

/* istanbul ignore if */
if (isBrowser) {
  log.createVConsole(document.body)
}

runTests({
  awareness
}).then(success => {
  /* istanbul ignore next */
  if (isNode) {
    process.exit(success ? 0 : 1)
  }
})
