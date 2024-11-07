import { basename } from 'node:path'

const path = basename(process.env.APP_BASE_PATH || '')

export const APP_BASE_PATH = path ? `/${path}` : '/'