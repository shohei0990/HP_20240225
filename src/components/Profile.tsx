import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';

const Profile: React.FC = () => {
    // selectedSectionという状態を持つ。
    // この状態は、ユーザーが選択したセクション（Tech、Business、Creative）を保持します。
    // useState('')は、selectedSectionの初期値を空文字列に設定しています。
    const [selectedSection, setSelectedSection] = useState('');

    // displayContent関数は、選択されたセクションに基づいて表示するコンテンツを返します。
    // 引数sectionは、表示するセクションの名前です。
    const displayContent = (section: string) => {
        // contentClassは、CSSクラス名を動的に生成します。styles['list-item']は、
        // CSSモジュールからlist-itemクラスを参照します。
        // styles.fadeInは、fadeInアニメーションを適用するクラスを参照します。
        const contentClass = `${styles['list-item']} ${styles.fadeIn}`;
    
        switch (section) {
            case 'Tech':
                return (
                    <ul key="Tech" className={contentClass}>
                        <li>HEV車両の統合システム開発　Matlab / Simlink / C <br /> エネルギーマネジメントシステム、機能安全システム etc</li>
                        <li>アプリケーションモック開発　React / Python / SQL <br /> 議事録アプリ、 LINE日用品管理アプリ、音楽生成アプリ etc </li>
                    </ul>
                );
            case 'Business':
                return (
                    <ul key="Business" className={contentClass}>
                        <li>新規事業企画　生成AI活用アプリサービス<br /> 
                        Tech0 Boot Camp 修了：PdMスキルセット<br /> 
                        GCPJイノベータープログラム 修了<br />　 </li>
                    </ul>
                );
            case 'Creative':
                return (
                    <ul key="Creative" className={contentClass}>
                        <li>E-bikeコンテンツサービス企画　</li>
                        <li>新規事業企画フェーズのUXリサーチ<br /> Google UX Designe Professional Certificate 修了</li>
                        <li>Lステップ デジタルマーケティング</li>
                    </ul>
                );
            default:
                return null;
        }
    };

    // ボタンクリック時の処理を変更
    const handleClick = (section: string) => {
        setSelectedSection(section === selectedSection ? '' : section);
    };

    return (
        <div className={styles['profile-container']}>
            <div className={styles['profile-content']}>
                <div className={styles['profile-image']} />
                <div className={styles['profile-info']}>
                    <h2> Power of making </h2>
                    <p> アイデアやストーリー、モノやコト、エコシステムをつくる力<br />
                    さまざまな視点や観点から新しい社会を実装していくために<br />
                    BTCの越境人材キャリアを歩んでおります。<br /> </p>
                    <a href="#_" className={styles['link-button']}>
                        <span className={styles['absolute']}></span>
                        <span className={styles['icon-container']}>
                            {/* SVG content here */}
                        </span>
                        <span className={styles['relative']}> Portfolioを見る </span>
                    </a>
                </div>
            </div>
            {/* 新しいセクションを追加 */}
            <div className={styles['additional-section']}>
                <div className={styles['profile-info']}>
                    <h2> Skill Set </h2>
                        <a href="#_" className={styles['link-button2']} onClick={() => handleClick('Tech')}>
                            <span className={styles['absolute']}></span>
                            <span className={styles['icon-container']}></span>
                            <span className={styles['relative']}> Tech </span>
                        </a>
                        <a href="#_" className={styles['link-button2']} onClick={() => handleClick('Business')}>
                            <span className={styles['absolute']}></span>
                            <span className={styles['icon-container']}></span>
                            <span className={styles['relative']}> Business </span>
                        </a>
                        <a href="#_" className={styles['link-button2']} onClick={() => handleClick('Creative')}>
                            <span className={styles['absolute']}></span>
                            <span className={styles['icon-container']}></span>
                            <span className={styles['relative']}> Creative </span>
                        </a>  
                    {displayContent(selectedSection)}
                </div>
                <div className={styles['profile-image2']} />
            </div>
        </div>
    );
};

export default Profile;