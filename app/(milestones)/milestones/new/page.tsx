'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputCheckbox from "@/components/input_checkbox";
import InputDate from "@/components/input_date";
import InputDatetime from "@/components/input_datetime";
import InputFile from "@/components/input_file";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import InputTextArea from "@/components/input_textarea";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/milestones/edit'
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">開始日</label>
          <InputDate id="company" />
        </div>
        <div className="col-span-2 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">終了日</label>
          <InputDate id="company" />
        </div>
        <div className="col-span-4 lg:col-span-4">
          <label htmlFor="content" className="block mb-1">関与先</label>
          <InputSelect
            id="content"
            items={[
              { label: '間接業務', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-2 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">時間単価</label>
          <InputText id="company" />
        </div>
        <div className="col-span-2 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">工数</label>
          <InputText id="company" />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>作成</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>
    </div>
  );
}
