const newsList = [
  {
    date: '2022.5.25',
    body: `第5回(2022年度)通常総会を開催しました。`,
  },
  {
    date: '2022.5.20',
    body: `<a href="https: //sites.google.com/view/super-daigaku/uniic%E4%BC%81%E6%A5%AD%E3%81%A8%E5%AD%A6%E7%94%9F%E3%81%AE%E4%BA%A4%E6%B5%81/uniicinc%E9%96%8B%E5%82%AC%E6%A1%88%E5%86%85?authuser=0">第13回UNIIC/INCイノベーション・ネットワーク・カフェ</a>にて、第3回学力向上アプリコンテストの案内及び電気通信大学プログラミング教室講師募集の案内を行いました。`,
  },
  {
    date: '2022.4.1',
    body: `<a href="https://www.gakuryokuup.com/">第3回学力向上アプリコンテスト</a>のエントリーを開始しました。<br>
            エントリー期間は4月1日〜9月26日です。たくさんのご応募をお待ちしております。`,
  },
  {
    date: '2022.3.20',
    body: `<a href = "https://www.uec-programming.com/"> 電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a> の入会説明会を開催しました。`,
  },
  {
    date: '2022.2.20',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。
    次回の説明会は2022年3月20日(日)14：00～15：00にオンラインにて開催します。詳細は<a href = "https://www.uec-programming.com/2022/02/21/information_session20220320/">こちら</a>`,
  },
  {
    date: '2022.1.16',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>
          次回の説明会は2022年2月20日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2022/01/18/information_session20220220/">こちら</a>`,
  },
  {
    date: '2021.11.20',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>表彰式を開催しました。`,
  },
  {
    date: '2021.11.1',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>審査結果をホームページにて公開しました。`,
  },
  {
    date: '2021.10.18',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>応募作品の一般投票を締め切りました。多くの方の投票をありがとうございました。`,
  },
  {
    date: '2021.9.19',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>
           次回の説明会は2021年10月17日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/09/20/information_session_20211017/">こちら</a>`,
  },
  {
    date: '2021.9.7',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>の応募作品の一般公開、一般投票受付を開始しました。一般投票受付期間は９月７日(火)～１０月１８日(月)。<br>
           多くの方からの投票をお待ちしております。`,
  },
  {
    date: '2021.9.1',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>の受付を締め切りました。総エントリー数２６件、そのうち応募作品の提出は２２件でした。
           ありがとうございました。<br>９月７日からは作品を一般公開し、一般の方からの投票を受け付けます。是非とも投票をお願いいたします。`,
  },
  {
    date: '2021.8.8',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>
           次回の説明会は2021年9月19日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/08/09/information_session_20210919/">こちら</a>`,
  },
  {
    date: '2021.7.18',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>
           次回の説明会は2021年8月8日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/07/19/information-session20210808/">こちら</a>`,
  },
  {
    date: '2021.6.20',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>次回の説明会は2021年7月18日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/06/21/information-session20210718/">こちら</a>`,
  },
  {
    date: '2021.5.16',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>次回の説明会は2021年6月20日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/05/18/information-session20210620/">こちら</a>`,
  },
  {
    date: '2021.4.30',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>の参加者募集案内が<a href="https://www.uec.ac.jp/news/event/2021/20210430_3343.html ">
電気通信大学のHP</a>に掲載されました。<br>`,
  },
  {
    date: '2021.4.30',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会【5月16日開催】案内が<a href="https://www.uec.ac.jp/news/event/2021/20210409_3284.html ">
電気通信大学のHP</a>に掲載されました。<br>`,
  },
  {
    date: '2021.4.18',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>次回の説明会は2021年5月16日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://www.uec-programming.com/2021/04/18/information_session_20210516/">こちら</a>`,
  },
  {
    date: '2021.4.9',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会【4月18日開催】案内が<a href="https://www.uec.ac.jp/news/event/2021/20210409_3284.html ">
電気通信大学のHP</a>に掲載されました。<br>`,
  },
  {
    date: '2021.3.21',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>次回の説明会は2021年4月18日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://wp.me/p8qgPe-1vW">こちら</a>`,
  },
  {
    date: '2021.3.15',
    body: `<a href="https://www.gakuryokuup.com/">第2回学力向上アプリコンテスト</a>のホームページを公開しました。<br>エントリーは4月1日からです。皆さまからのエントリーをお待ちしています。`,
  },
  {
    date: '2021.2.21',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室／ｕｅｃプログラミング教室</a>の入会説明会を開催しました。<br>次回の説明会は2021年3月21日(日)14：00～15：00にオンラインにて開催します。詳細は <a href="https://wp.me/p8qgPe-1vW">こちら</a>`,
  },
  {
    date: '2021.1.10',
    body: `明けましておめでとうございます。<br>本年も<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室及びｕｅｃプログラミング教室</a>をオンラインにてスタートしました。`,
  },
  {
    date: '2020.12.12',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>表彰式を開催しました。`,
  },
  {
    date: '2020.12.1',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>審査結果をホームページにて公開しました。`,
  },
  {
    date: '2020.11.1',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>応募作品の一般投票を締め切りました。多くの方の投票をありがとうございました。`,
  },
  {
    date: '2020.9.17',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>応募作品の一般公開、一般投票受付開始。一般投票受付期間は９月７日(月)～１０月３１日(土)。<br>多くの方からの投票をお待ちしております。`,
  },
  {
    date: '2020.9.1',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>受付を締め切りました。総エントリー数２９件、そのうち応募作品の提出は２０件でした。<br>ありがとうございました。<br>９月７日からは作品を一般公開し、一般の方からの投票を受け付けます。是非とも投票をお願いいたします。`,
  },
  {
    date: '2020.8.17',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>はエントリーを締め切りました。総エントリー数２９件でした。<br>応募作品の提出をお待ちしております。`,
  },
  {
    date: '2020.8.11',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>は現在エントリー数２３件`,
  },
  {
    date: '2020.8.2',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室</a>はオンライン授業継続中`,
  },
  {
    date: '2020.7.26',
    body: `<a href="https://www.ripple.uec-programming.com/">プログラミング学習サイト”Ripple"</a>の登録者数１４５名を突破しました`,
  },
  {
    date: '2020.6.25',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>はエントリー期間・作品応募締切を延長しました`,
  },
  {
    date: '2020.6.25',
    body: `<a href="https://www.ripple.uec-programming.com/">プログラミング学習サイト”Ripple"</a>の登録者数１３０名を突破しました`,
  },
  {
    date: '2020.6.25',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>は現在エントリー数１２件`,
  },
  {
    date: '2020.6.7',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室</a>はオンライン授業継続中`,
  },
  {
    date: '2020.5.31',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>は現在エントリー数１０件`,
  },
  {
    date: '2020.5.10',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室</a>はオンライン授業継続中`,
  },
  {
    date: '2020.5.8',
    body: `<a href="https://www.ripple.uec-programming.com/">プログラミング学習サイト”Ripple"</a>を公開しました`,
  },
  {
    date: '2020.4.20',
    body: `<a href="https://gakuryokuup.com/">第1回学力向上アプリコンテスト</a>エントリー受付中`,
  },
  {
    date: '2020.4.1',
    body: `<a href="https://www.uec-programming.com/">電気通信大学プログラミング教室</a>はオンライン授業実施中`,
  },
];

function news2html(newsList) {
  return newsList.map((item) => `<p class="new-item">${item.date}<br>${item.body}</p>`).join('');
}

function showYearNews() {
  // ニュースの表示
  const params = new URLSearchParams(window.location.search);
  const thisYear = new Date().getFullYear();
  const year = params.has('year') ? params.get('year') : thisYear.toString();
  const yearNews = newsList.filter((item) => item.date.indexOf(year) != -1);
  document.getElementById('js-news').innerHTML = news2html(yearNews);
  // アーカイブの表示
  const start = 2020;
  let archiveContent = '';
  for (let y = thisYear; y >= start; y--) {
    archiveContent += `<li><a href="./news.html?year=${y}">${y}年</a></li>`;
  }
  document.getElementById('js-archive-list').innerHTML = archiveContent;
}

function showRecentNews() {
  const limit = 4; // 記事数
  const news = newsList.slice(0, limit);
  document.getElementById('js-recent-news').innerHTML = news2html(news);
}
