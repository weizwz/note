import { Post } from '../../utils/post'
import { HomePost } from './WHome'

// 兼容首页需求
export interface PostCard extends HomePost {
  baseUrl?: string
}
// 文章列表，不兼容首页
export interface PostList {
  title: string
  posts: Post[]
}