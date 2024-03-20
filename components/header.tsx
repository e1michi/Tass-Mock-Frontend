'use client';
import Link from 'next/link';
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "./breadcrumb";
import Dropdown from './dropdown';

export default function Header() {
  let humberger_state = false; // false === close
  const humberger_toggle = (event: any) => {
    const humberger_close = document.getElementById('humberger_close') as HTMLElement;
    const humberger_open = document.getElementById('humberger_open') as HTMLElement;
    const navbar_menu = document.getElementById('navbar_menu') as HTMLElement;
    // const header_hidden_space = document.getElementById('header_hidden_space') as HTMLElement;
    navbar_menu.style.display = 'block';
    if (humberger_state) {
      humberger_close.style.display = 'block';
      humberger_open.style.display = 'none';
      navbar_menu.style.display = 'none';
      // header_hidden_space.style.height = '80px';
      humberger_state = false;
    }
    else {
      humberger_close.style.display = 'none';
      humberger_open.style.display = 'block';
      navbar_menu.style.display = 'block';
      // header_hidden_space.style.height = '160px';
      humberger_state = true;
    }
  }
  return (
    <div className='text-gray-200'>
      <header className="fixed z-20 top-0 w-[100%] h-20">
        <div className='py-1 bg-gray-800'>
          <div className='lg:flex lg:justify-between'>

            <div className='flex justify-between items-center lg:inline-flex lg:items-center peer'>
              <div className='inline-flex flex-shrink-0 items-center py-2'>
                <img src="/tass.png" width={96} />
                <span className="ms-2 text-xl font-semibold">税理士支援サービス</span>
              </div>
              <div className="lg:hidden">
                <button type="button" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none" onClick={humberger_toggle}>
                  <svg id='humberger_close' className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg id='humberger_open' className="hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>

            <div id="navbar_menu" className="hidden px-2 lg:inline-flex lg:items-center">
              <div className='text-left lg:text-right lg:inline-flex lg:items-center'>
                <div className='px-2 py-2'>
                  <a className="hover:text-gray-400" href="/" aria-current="page">
                    ホーム
                  </a>
                </div>
                <div className='px-2 py-2'>
                  <Dropdown
                    items={[
                      { label: '業務日報一覧', url: '/daily_report_heads' },
                      { label: '業務日報明細一覧', url: '/daily_report_bodies' }
                    ]}
                  >
                    業務日報
                  </Dropdown>
                </div>
                <div className='px-2 py-2'>
                  <a className="hover:text-gray-400" href="/activity_reports">
                    業務処理簿
                  </a>
                </div>
                <div className='px-2 py-2'>
                  <Dropdown
                    items={[
                      { label: '目標一覧', url: '/milestones' },
                      { label: '全体進捗状況', url: '/all_progresses' }
                    ]}
                  >
                    目標管理
                  </Dropdown>
                </div>
                <div className='px-2 py-2'>
                  <Dropdown
                    items={[
                      { label: '依頼一覧', url: '/bizmatch_requests' },
                      { label: '応募一覧', url: '/bizmatch_applications' },
                      { label: '取引一覧', url: '/bizmatch_deals' }
                    ]}
                  >
                    ビジネスマッチング
                  </Dropdown>
                </div>
                <div className='px-2 py-2'>
                  <Dropdown
                    items={[
                      { label: '関与先一覧', url: '/master_companies' },
                      { label: '税理士一覧', url: '/master_taxaccountants' },
                      { label: 'システム管理', url: '/admin' }
                    ]}
                  >
                    設定
                  </Dropdown>
                </div>
                <div className='px-2 py-2'>
                  <button className="px-2 py-1 border rounded hover:text-gray-400">
                    サインアウト
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
      <div id='header_hidden_space' className='h-20'></div>
      <div className="fixed z-10 top-20 w-[100%] h-10">
        <Breadcrumb />
      </div>
      <div id='breadcrumb_hidden_space' className='h-10'></div>
    </div>
  );
}
