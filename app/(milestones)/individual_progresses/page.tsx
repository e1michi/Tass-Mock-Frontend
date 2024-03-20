'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  }
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6 lg:col-span-6">
            <label htmlFor="report_date" className="block mb-1">開始日</label>
            <InputDate id="report_date" />
          </div>
          <div className="col-span-6 lg:col-span-6">
            <label htmlFor="report_date" className="block mb-1">終了日</label>
            <InputDate id="report_date" />
          </div>
        </div>

        <div className="mt-2 inline-flex gap-x-2">
          <Button color="blue" onClick={onClickFiler}>絞り込み</Button>
          <Button color="gray" onClick={onClickReset}>リセット</Button>
          <Button color="blue" onClick={onClickAdd}>CSV出力</Button>
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">区分</th>
                <th className="border p-2">項目</th>
                <th className="border p-2">合計</th>
                <th className="border p-2">支援　太郎</th>
                <th className="border p-2">支援　太郎</th>
                <th className="border p-2">支援　太郎</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2" rowSpan={3}>目標</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">時間単価</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={3}>差分</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">時間単価</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={3}>実績合計</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">時間単価</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">年月</th>
                <th className="border p-2">項目</th>
                <th className="border p-2">合計</th>
                <th className="border p-2">支援　太郎</th>
                <th className="border p-2">支援　太郎</th>
                <th className="border p-2">支援　太郎</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={2}>2023-04</td>
                <td className="border p-2">報酬</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">工数</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
