'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import InputTextArea from "@/components/input_textarea";
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

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block font-medium mb-2 dark:text-white">報告日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-full">
          <label htmlFor="report_content" className="block font-medium mb-2 dark:text-white">業務内容</label>
          <InputTextArea id="report_content" rows={3} />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>変更</Button>
        <Button color="gray" onClick={onClickReset}>戻る</Button>
      </div>
    </div>
  );
}
