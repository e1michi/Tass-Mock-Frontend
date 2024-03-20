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
    window.location.href = '/master_companies/edit'
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
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="company" className="block mb-1">名称</label>
          <InputText id="company" disabled />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="company" className="block mb-1">住所</label>
          <InputText id="company" disabled />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>編集</Button>
        <Button color="red" onClick={onClickDelete}>削除</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>
    </div>
  );
}
