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
    window.location.href = '/bizmatch_requests/edit'
  };
  const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickApply = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 lg:col-span-4">
          <label htmlFor="content" className="block mb-1">カテゴリー</label>
          <InputSelect
            id="content"
            items={[
              { label: '公文書二重チェック', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-6 lg:col-span-8">
          <label htmlFor="company" className="block mb-1">タイトル</label>
          <InputText id="company" />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="process_date" className="block mb-1">期限</label>
          <InputDatetime id="process_date" />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="content" className="block mb-1">種別</label>
          <InputSelect
            id="content"
            items={[
              { label: '委託', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="memo" className="block mb-1">内容</label>
          <InputTextArea id="memo" rows={3} />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="attachment" className="block mb-1">添付ファイル</label>
          <InputFile id="attachment" />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="company" className="block mb-1">金額</label>
          <InputText id="company" />
        </div>
        <div className="col-span-full">
          <label htmlFor="memo" className="block mb-1">応募コメント</label>
          <InputTextArea id="memo" rows={3} />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>変更</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>
    </div>
  );
}
