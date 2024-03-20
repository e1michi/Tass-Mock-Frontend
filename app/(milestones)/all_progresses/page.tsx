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
          <div className="col-span-4 lg:col-span-3">
            <label htmlFor="report_date" className="block mb-1">開始日</label>
            <InputDate id="report_date" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <label htmlFor="report_date" className="block mb-1">終了日</label>
            <InputDate id="report_date" />
          </div>
          <div className="col-span-6 lg:col-span-6">
            <label htmlFor="job_name" className="block mb-1">顧客名</label>
            <InputText id="job_name" />
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
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">目標工数</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費工数</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残工数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">No</th>
                <th className="border p-2">顧客名</th>
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">目標工数</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費工数</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残工数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  1
                </td>
                <td className="border p-2">
                  <Anchor href="/individual_progresses">支援サービス株式会社</Anchor>
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  1
                </td>
                <td className="border p-2">
                  <Anchor href="/individual_progresses">支援サービス株式会社</Anchor>
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  1
                </td>
                <td className="border p-2">
                  <Anchor href="/individual_progresses">支援サービス株式会社</Anchor>
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
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
