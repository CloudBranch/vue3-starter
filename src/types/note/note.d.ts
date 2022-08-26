interface TNoteMeta extends Object {
  [key: string]: unknown
  created?: string
  updated?: string
  deleted?: string
  status?: string
}

export interface TNote {
  [key: string]: unknown
  id?: string
  title?: string
  body?: string
  editing?: boolean
  color?: string
  meta?: TNoteMeta
}
