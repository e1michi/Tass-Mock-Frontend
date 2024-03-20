'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReportDetail() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/bizmatch_requests/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">カテゴリー</label>
          <InputSelect
            id="description"
            items={[
              { label: '全て', value: '0' },
              { label: '選択肢', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">タイトル</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">種別</label>
          <InputSelect
            id="description"
            items={[
              { label: '全て', value: '0' },
              { label: '選択肢', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">内容</label>
          <InputText id="reporter" />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>絞り込み</Button>
        <Button color="gray" onClick={onClickReset}>リセット</Button>
        <Button color="blue" onClick={onClickNew}>新規作成</Button>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">カテゴリー</th>
              <th className="border p-2">タイトル</th>
              <th className="border p-2">種別</th>
              <th className="border p-2">期限</th>
              <th className="border p-2">内容</th>
              <th className="border p-2">更新日時</th>
              <th className="border p-2">作成日時</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                公式文書二重チェック
              </td>
              <td className="border p-2">
                <Anchor href="/bizmatch_requests/show">〇〇申請書確認依頼</Anchor>
              </td>
              <td className="border p-2">
                委託
              </td>
              <td className="border p-2">
                2024-02-05 18:00
              </td>
              <td className="border p-2">
                サンプル
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
