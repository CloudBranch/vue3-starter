export interface TEmail {
  [key: string]: unknown
  to?: string
  cc?: string
  bcc?: string
  subject?: string
  body?: string
  bodyText?: string
}

export interface TSMS {
  [key: string]: unknown
  phoneNumber?: string | number
}

export interface TRecipient {
  [key: string]: unknown
  firstName?: string
  lastName?: string
}
