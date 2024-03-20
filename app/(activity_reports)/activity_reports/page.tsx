'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
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
    window.location.href = '/activity_reports/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">開始日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">終了日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">委嘱者</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">内容</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-4 lg:col-span-2">
          <label htmlFor="report_content" className="block mb-1">てん末</label>
          <InputText id="report_content" />
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
              <th className="border p-2">業務区分</th>
              <th className="border p-2">委嘱者</th>
              <th className="border p-2">内容</th>
              <th className="border p-2">てん末</th>
              <th className="border p-2">処理年月日</th>
              <th className="border p-2">税務代理権限書提出日</th>
              <th className="border p-2">担当税理士</th>
              <th className="border p-2">更新日時</th>
              <th className="border p-2">作成日時</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                税務代理(1号)
              </td>
              <td className="border p-2">
                支援サービス株式会社
              </td>
              <td className="border p-2">
                <Anchor href="/activity_reports/show">所得税確定申告</Anchor>
              </td>
              <td className="border p-2">
                申告書作成
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                税務代理(1号)
              </td>
              <td className="border p-2">
                支援サービス株式会社
              </td>
              <td className="border p-2">
                <Anchor href="/activity_reports/show">所得税確定申告</Anchor>
              </td>
              <td className="border p-2">
                申告書作成
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
              <td className="border p-2">
                2024-02-05 16:00:00
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                税務代理(1号)
              </td>
              <td className="border p-2">
                支援サービス株式会社
              </td>
              <td className="border p-2">
                <Anchor href="/activity_reports/show">所得税確定申告</Anchor>
              </td>
              <td className="border p-2">
                申告書作成
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                支援　太郎
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
