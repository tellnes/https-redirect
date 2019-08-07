import { Server } from 'http'

declare namespace HTTPSRedirect {
  export interface Options {
    permament?: boolean
    name?: string
    silent?: boolean
  }
}
declare function HTTPSRedirect(options?: HTTPSRedirect.Options): Server
export = HTTPSRedirect

