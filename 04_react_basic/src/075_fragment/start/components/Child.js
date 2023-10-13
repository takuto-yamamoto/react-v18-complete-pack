import './Child.css';
import { Fragment } from 'react';

const Child = () => {
  return (
    // 最上位のタグは1つである必要がある
    // React.Fragmentで全てのタグをまとめてあげる(フラグメントタグ自体は表示されない)
    // 余計なタグを出したくない場合に便利
    // ReactはFragment以外にも様々な関数・コンポーネントが標準実装されている
    // Fragmentの代わりに<></>でもOK（import不要）
    // 唯一key属性だけFragmentに指定可能（その場合はFlagmentは省略不可）
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Flagment</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        nesciunt omnis iste, obcaecati accusamus aperiam. Nostrum magnam non
        placeat fugiat odio eos, blanditiis voluptatibus asperiores quod. Illum
        rerum modi non?
      </p>
    </Fragment>
  );
};

export default Child;
