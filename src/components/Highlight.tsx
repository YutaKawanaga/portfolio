import { Fragment } from "react";

/*
  `__テキスト__` で囲まれた箇所をマーカー(蛍光ペン)強調に変換する。
  データ側 (data/portfolio.ts) では文中を __...__ で囲むだけでよい。
*/
export function Highlight({ text }: { text: string }) {
  const segments = text.split("__");
  return (
    <>
      {segments.map((seg, i) =>
        i % 2 === 1 ? (
          <span className="hl" key={i}>
            {seg}
          </span>
        ) : (
          <Fragment key={i}>{seg}</Fragment>
        ),
      )}
    </>
  );
}
