import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contact_form}>
            <h2>お問合せ</h2>
            <form>
                <div className={styles.form_group}>
                    <label>お名前</label>
                    <input type="text" id="name" />
                    <span className={styles.form_error} id="name_error">お名前は必須です。</span>
                </div>
                <div className={styles.form_group}>
                    <label>email</label>
                    <input type="email" id="email" />
                    <span className={styles.form_error} id="email_error">emailは必須かつemailの形式で入力してください。</span>
                </div>
                <div className={styles.form_group}>
                    <label>お問合せ内容</label>
                    <textarea id="body" rows={4}></textarea>
                    <span className={styles.form_error} id="body_error">お問合せ内容は必須かつ1文字以上10文字以下で入力してください。</span>
                </div>
                <button className={styles.submit_btn} id="submit_btn">送信</button>
            </form>
        </main >
    )
}