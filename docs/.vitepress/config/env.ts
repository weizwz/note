import { basename } from 'node:path'

export const APP_BASE_PATH = basename(process.env.APP_BASE_PATH || '')