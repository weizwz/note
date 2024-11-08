import { loadEnv } from 'vitepress'

console.log(loadEnv(process.env.NODE_ENV as string, process.cwd()));


export const env = loadEnv(process.env.NODE_ENV as string, process.cwd())