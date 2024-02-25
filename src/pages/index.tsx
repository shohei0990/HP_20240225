import { client } from '../libs/client';
import Profile from '../components/Profile';
import Blog from '../components/Blog';
import NewsList, { NewsItem } from '../components/News'; // NewsItem型をインポート
import styles from '../styles/Home.module.css';

type BlogType = {
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
};

type Props = {
  blogs: BlogType[];
  news: NewsItem[]; // 更新記事のリストを追加
};

export async function getServerSideProps() {
  try {
    const data = await client.get({ endpoint: 'blogs' });
    return { props: { blogs: data.contents } };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { props: { blogs: [] } };
  }
}

export default function Home({ blogs }: Props) {
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.top_msg}>  {/*  */} </h1>
      </div>
      <main>
        <section className={styles.content}>
          {/* ハイフンを含むクラス名へのアクセスをブラケット記法に変更 */}
          <p className={styles['section-title']}> Profile </p>
          <Profile />
          <p className={styles['section-title']}> Works </p>
          <Blog blogs={blogs} />
          <p className={styles['section-title']}> News </p>
          {/* NewsListコンポーネントを使用して更新記事をリスト表示 */}
          <NewsList />
        </section>
      </main>
    </>
  );
}