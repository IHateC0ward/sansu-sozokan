"use client";

import { FormEvent, useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1900&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1900&q=85",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1900&q=85",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1900&q=85",
  "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=1900&q=85",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1900&q=85"
];

const courses = [
  { grade: "小学1–3年", title: "算数的思考・創造力開発", tag: "FOUNDATION", text: "数や図形を“遊びながら発見する”体験を通して、公式に頼らず自分の言葉で考える土台を育てます。", points: ["パズル・図形感覚", "試行錯誤する習慣", "少人数対話型授業"] },
  { grade: "小学3–5年", title: "コアモデル・解法構築", tag: "CORE", text: "文章題の構造を可視化し、未知の問題にも転用できる思考モデルと解法技術を体系的に習得します。", points: ["比・速さ・場合の数", "思考プロセスの言語化", "週間個別フィードバック"] },
  { grade: "小学5–6年", title: "最難関校・最終問題突破", tag: "ADVANCED", text: "学校別の出題思想を読み解き、合否を分ける最終問題を時間内に攻略する実戦力を磨きます。", points: ["志望校別演習", "本番型タイムトライアル", "答案作成・部分点戦略"] },
  { grade: "選抜制", title: "算数オリンピック・チャレンジ", tag: "OLYMPIAD", text: "既知の枠組みを越える最高峰の問題に挑み、ひらめきを論理へ昇華する選抜クラスです。", points: ["ジュニア算数オリンピック", "独創的アプローチ", "トップ層ゼミ形式"] }
];

const stories = [
  { school: "開成中学校 合格", name: "小学6年・Kさん", quote: "解き方を教わるのではなく、なぜそう考えたかを毎回聞かれました。本番では初めて見る問題が一番楽しかったです。", mark: "K" },
  { school: "桜蔭中学校 合格", name: "保護者・Mさん", quote: "苦手だった図形が、先生との対話で得意分野に。点数だけでなく、娘の考え方の変化を共有していただけました。", mark: "M" },
  { school: "筑波大学附属駒場中 合格", name: "小学6年・Sさん", quote: "仲間の違う解き方を知るのが刺激的でした。最後まで諦めず、自分で突破口を探す力がつきました。", mark: "S" }
];

function Geometry() {
  return <div className="geometry" aria-hidden="true"><span/><span/><span/><span/><i>π</i><b>∑</b></div>;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [course, setCourse] = useState(0);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  useEffect(() => { const id = setInterval(() => setSlide(v => (v + 1) % slides.length), 5200); return () => clearInterval(id); }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const next: Record<string, string> = {};
    if (!String(data.name || "").trim()) next.name = "お名前を入力してください";
    if (!String(data.grade || "")) next.grade = "学年を選択してください";
    if (!/^\S+@\S+\.\S+$/.test(String(data.email || ""))) next.email = "正しいメールアドレスを入力してください";
    if (!String(data.location || "")) next.location = "受講方法を選択してください";
    setErrors(next);
    if (!Object.keys(next).length) setSent(true);
  }

  return <main>
    <header className="header">
      <a className="brand" href="#top"><span className="brand-mark">創</span><span><strong>算数創造館</strong><small>SANSU SOZOKAN</small></span></a>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="メニュー">{menu ? "×" : "☰"}</button>
      <nav className={menu ? "nav open" : "nav"}>
        <a href="#philosophy">教育理念</a><a href="#curriculum">コース紹介</a><a href="#lectures">算数名家講堂</a><a href="#stories">合格体験記</a><a href="#assessment">能力診断</a>
      </nav>
      <a className="header-cta" href="#contact">無料体験授業 <span>→</span></a>
    </header>

    <section className="hero" id="top">
      <div className="slides">{slides.map((url, i) => <div key={url} className={i === slide ? "slide active" : "slide"} style={{backgroundImage:`url(${url})`}} />)}</div>
      <div className="shade"/><Geometry/>
      <div className="hero-content">
        <p className="eyebrow">THE ART OF MATHEMATICAL THINKING</p>
        <h1>創造力で、<br/><em>最難関校</em>の壁を<br/>突破する。</h1>
        <p className="hero-lead">答えを覚えるのではなく、答えを創る。<br/>本質を見抜く思考力が、未来を切り拓く。</p>
        <button className="gold-button pulse" onClick={() => setModal(true)}><small>所要時間 約15分</small>算数潜在能力診断を無料で受ける <span>↗</span></button>
      </div>
      <div className="slide-count"><b>0{slide + 1}</b><span/><small>06</small></div>
      <a href="#philosophy" className="scroll">SCROLL <span>↓</span></a>
    </section>

    <section className="intro" id="philosophy">
      <div className="section-label"><span>01</span> OUR PHILOSOPHY</div>
      <div className="intro-grid"><h2>算数は、<br/>未来を創る<br/><em>言語</em>である。</h2><div><p>私たちが育てるのは、正解へ最短でたどり着く子ではありません。</p><p>未知の問いを面白がり、自ら仮説を立て、試し、粘り強く答えを創り出せる子です。その力は受験の先でも、生涯にわたり可能性を拓き続けます。</p><a href="#curriculum" className="text-link">教育理念を詳しく見る <span>→</span></a></div></div>
    </section>

    <section className="strengths">
      <div className="section-head"><div><div className="section-label"><span>02</span> THREE STRENGTHS</div><h2>合格を、その先の力へ。</h2></div><p>最難関校が求める力を、3つの軸から育てます。</p></div>
      <div className="strength-grid">
        {[{n:"01",jp:"創造力",en:"CREATIVITY",t:"丸暗記から、脱却する。",d:"公式に当てはめるのではなく、図を描き、手を動かし、自分だけの突破口を発見する力を養います。",icon:"◇"},{n:"02",jp:"進学力",en:"ANALYSIS",t:"出題の本質を、射貫く。",d:"膨大な入試データと学校ごとの出題思想を分析。本当に必要な力へ、学習を集中させます。",icon:"◎"},{n:"03",jp:"伴走力",en:"MENTORING",t:"一人ひとりを、見つめる。",d:"トッププロ講師による直接指導。少数精鋭だからこそ、思考の癖まで捉えて導きます。",icon:"△"}].map(x => <article className="strength-card" key={x.n}><div className="card-top"><span>{x.n}</span><i>{x.icon}</i></div><small>{x.en}</small><h3>{x.jp}</h3><h4>{x.t}</h4><p>{x.d}</p></article>)}
      </div>
    </section>

    <section className="stories" id="stories">
      <div className="section-head light"><div><div className="section-label"><span>03</span> SUCCESS STORIES</div><h2>思考が変わった。<br/>未来が、ひらけた。</h2></div><p>合格は、成長のひとつの証。<br/>生徒と保護者のリアルな声をご紹介します。</p></div>
      <div className="story-row">{stories.map(s => <article className="story" key={s.school}><div className="story-mark">{s.mark}</div><div><span className="school">{s.school}</span><blockquote>「{s.quote}」</blockquote><p>{s.name}</p></div></article>)}</div>
      <a className="all-link" href="#contact">すべての合格体験記を見る →</a>
    </section>

    <section className="curriculum" id="curriculum">
      <div className="section-head"><div><div className="section-label"><span>04</span> CURRICULUM</div><h2>成長に合わせた、<br/>4つの学び。</h2></div><p>発想の芽生えから最高峰への挑戦まで。<br/>段階的に、しかし着実に思考を深めます。</p></div>
      <div className="course-tabs">{courses.map((c,i)=><button className={i===course?"active":""} onClick={()=>setCourse(i)} key={c.tag}><small>0{i+1}</small><span>{c.grade}</span></button>)}</div>
      <div className="course-panel"><div><span className="course-tag">{courses[course].tag}</span><p className="grade">対象：{courses[course].grade}</p><h3>{courses[course].title}</h3><p>{courses[course].text}</p></div><ul>{courses[course].points.map(p=><li key={p}><span>✓</span>{p}</li>)}</ul></div>
    </section>

    <section className="contact" id="contact">
      <Geometry/><div className="contact-copy"><div className="section-label"><span>05</span> TRIAL LESSON</div><h2>まずは、思考が<br/>変わる瞬間を。</h2><p>お子さまの現在地と可能性を、プロ講師が丁寧に見極めます。無理な勧誘は一切ありません。</p><div className="contact-note"><b>無料体験授業</b><span>授業 60分 ＋ 個別フィードバック 20分</span></div></div>
      <form onSubmit={submit} noValidate>{sent ? <div className="thanks"><b>✓</b><h3>お申し込みを受け付けました</h3><p>担当者より2営業日以内にご連絡いたします。</p><button type="button" onClick={()=>setSent(false)}>別のお申し込み</button></div> : <><h3>無料体験授業のお申し込み</h3><label>お名前 <em>必須</em><input name="name" placeholder="例）創造 太郎" onChange={()=>setErrors(v=>({...v,name:""}))}/>{errors.name&&<i>{errors.name}</i>}</label><div className="form-row"><label>学年 <em>必須</em><select name="grade" defaultValue=""><option value="" disabled>選択してください</option><option>小学1年</option><option>小学2年</option><option>小学3年</option><option>小学4年</option><option>小学5年</option><option>小学6年</option></select>{errors.grade&&<i>{errors.grade}</i>}</label><label>希望校舎 <em>必須</em><select name="location" defaultValue=""><option value="" disabled>選択してください</option><option>東京本館</option><option>横浜校</option><option>オンライン</option></select>{errors.location&&<i>{errors.location}</i>}</label></div><label>メールアドレス <em>必須</em><input name="email" type="email" placeholder="example@email.com" onChange={()=>setErrors(v=>({...v,email:""}))}/>{errors.email&&<i>{errors.email}</i>}</label><button className="submit">無料体験授業を申し込む <span>→</span></button><small className="privacy">送信することでプライバシーポリシーに同意したものとみなします。</small></> }</form>
    </section>

    <footer><div className="brand footer-brand"><span className="brand-mark">創</span><span><strong>算数創造館</strong><small>SANSU SOZOKAN</small></span></div><div className="footer-links"><a href="#philosophy">教育理念</a><a href="#curriculum">コース紹介</a><a href="#stories">合格体験記</a><a href="#assessment">能力診断</a><a href="#contact">お問い合わせ</a></div><p>© 2026 SANSU SOZOKAN. ALL RIGHTS RESERVED.</p></footer>

    {modal && <div className="modal" id="assessment" onMouseDown={()=>setModal(false)}><div className="modal-box" onMouseDown={e=>e.stopPropagation()}><button className="close" onClick={()=>setModal(false)}>×</button><span className="modal-icon">∑</span><small>FREE ASSESSMENT</small><h2>算数潜在能力診断</h2><p>5つのミニ問題から、お子さまの「論理・図形・数感覚・試行力・表現力」を分析します。</p><div className="diagnosis-bars"><span/><span/><span/><span/><span/></div><button className="gold-button" onClick={()=>{setModal(false);document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}}>診断テストをはじめる <span>→</span></button><em>所要時間：約15分 ／ 登録無料</em></div></div>}
  </main>;
}
