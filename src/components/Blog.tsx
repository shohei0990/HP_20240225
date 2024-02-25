import React from 'react';
import styles from '../styles/Blog.module.css'; // スタイルをインポート


type BlogProps = {
    blogs: {
        id: string;
        title: string;
        content: string;
        eyecatch: {
            url: string;
            height: number;
            width: number;
        };
        category: {
            id: string;
            name: string;
        };
    }[];
};

// Blog コンポーネント内
const Blog: React.FC<BlogProps> = ({ blogs }) => {
    return (
        <div className={styles['blog-grid']}>
            {blogs.map(blog => (
                <div key={blog.id} className={styles['blog-item']}>
                    <img src={blog.eyecatch.url} alt={blog.title} />
                    <p className={styles['blog-item-title']}>{blog.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;