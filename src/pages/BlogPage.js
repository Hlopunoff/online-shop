import React from 'react';
import Blog from '../components/blog/Blog';
import PageRouting from '../components/pageRouting/PageRouting';

const BlogPage = () => {
  return (
    <main>
        <PageRouting direction='Блог'/>
        <Blog/>
    </main>
  )
}

export default BlogPage