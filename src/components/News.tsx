import React from 'react';
import styles from '../styles/News.module.css'; // News.module.cssをインポート

export type NewsItem = {
    date: string;
    title: string;
};

// 仮の更新記事データ
const newsItems: NewsItem[] = [
    { date: '2022.08.15', title: '各種リンクを更新しました' },
    { date: '2022.08.15', title: '画像を更新しました。' },
    { date: '2022.08.14', title: 'プロフィールページを作成・公開しました。' },
    { date: '2022.08.03', title: 'TechO 二期生を募集しました。' },
];

const NewsList: React.FC = () => {
    return (
    <ul className={styles['news-list']}>
        {newsItems.map((newsItem, index) => (
        <li key={index} className={styles['news-item']}>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
            <span>{newsItem.title}</span>
        </li>
        ))}
    </ul>
    );
};

export default NewsList;