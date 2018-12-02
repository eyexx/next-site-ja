import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <SectionHeader
        id="features"
        title="Next.jsの特徴"
        description="The world’s leading companies use and love Next.js"
      />
      <div className="row">
        <div className="column">
          <h3 className="f3 fw6">設定の必要ゼロ</h3>
          <p>
            自動コード分割、 ファイルシステムに基づくルーティング、
            ホットリロードとユニバーサルレンダリング。
          </p>
          <Button href="/learn">Next.jsを学ぶ</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">完全に拡張可能</h3>
          <p>
            BabelとWebpackの設定を自分でコントロールできます。
            サーバー、ルーティング、プラグインもカスタマイズできます。
          </p>
          <Button href="/docs">ドキュメンテーションを読む</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">プロダクションモードのサポート</h3>
          <p>
            Oビルドサイズの縮小、開発者のコ​​ンパイルの高速化、その他数多くが改善のために最適化されています。
          </p>
          <Button href="/showcase">使用例をみる</Button>
        </div>
      </div>
      <style jsx>{`
        .column {
          text-align: left;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          .row {
            flex-direction: column;
            margin: -1.5rem 0;
          }
          .column {
            width: 100%;
            padding: 1.5rem 0;
            text-align: center;
            max-width: 350px;
          }
        }
      `}</style>
    </Container>
    <CompanySlider />
  </Container>
);
