import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  let settings: { label: string, path: string }[] = [{ label: 'ホーム', path: '/' }];

  switch (pathname) {
    case '/daily_report_heads':
      settings.push({ label: '業務日報一覧', path: '/daily_report_heads' });
      break;
    case '/daily_report_heads/date':
      settings.push({ label: '業務日報一覧', path: '/daily_report_heads' });
      settings.push({ label: '対象日選択', path: '/daily_report_heads/date' });
      break;
    case '/daily_report_heads/new':
      settings.push({ label: '業務日報一覧', path: '/daily_report_heads' });
      settings.push({ label: '業務日報作成', path: '/daily_report_heads/new' });
      break;
    case '/daily_report_heads/show':
      settings.push({ label: '業務日報一覧', path: '/daily_report_heads' });
      settings.push({ label: '業務日報表示', path: '/daily_report_heads/show' });
      break;
    case '/daily_report_heads/edit':
      settings.push({ label: '業務日報一覧', path: '/daily_report_heads' });
      settings.push({ label: '業務日報表示', path: '/daily_report_heads/show' });
      settings.push({ label: '業務日報編集', path: '/daily_report_heads/edit' });
      break;
    case '/daily_report_bodies':
      settings.push({ label: '業務日報明細一覧', path: '/daily_report_bodies' });
      break;
    case '/daily_report_bodies/show':
      settings.push({ label: '業務日報明細一覧', path: '/daily_report_bodies' });
      settings.push({ label: '業務日報明細表示', path: '/daily_report_bodies/show' });
      break;
    case '/daily_report_bodies/edit':
      settings.push({ label: '業務日報明細一覧', path: '/daily_report_bodies' });
      settings.push({ label: '業務日報明細表示', path: '/daily_report_bodies/show' });
      settings.push({ label: '業務日報明細編集', path: '/daily_report_bodies/edit' });
      break;
    case '/daily_report_bodies/new':
      settings.push({ label: '業務日報明細一覧', path: '/daily_report_bodies' });
      settings.push({ label: '業務日報明細作成', path: '/daily_report_bodies/new' });
      break;
    case '/activity_reports':
      settings.push({ label: '業務処理簿一覧', path: '/activity_reports' });
      break;
    case '/activity_reports/new':
      settings.push({ label: '業務処理簿一覧', path: '/activity_reports' });
      settings.push({ label: '業務処理簿作成', path: '/activity_reports/new' });
      break;
    case '/activity_reports/show':
      settings.push({ label: '業務処理簿一覧', path: '/activity_reports' });
      settings.push({ label: '業務処理簿表示', path: '/activity_reports/show' });
      break;
    case '/activity_reports/edit':
      settings.push({ label: '業務処理簿一覧', path: '/activity_reports' });
      settings.push({ label: '業務処理簿表示', path: '/activity_reports/show' });
      settings.push({ label: '業務処理簿編集', path: '/activity_reports/edit' });
      break;
    case '/bizmatch_requests':
      settings.push({ label: '依頼一覧', path: '/bizmatch_requests' });
      break;
    case '/bizmatch_requests/new':
      settings.push({ label: '依頼一覧', path: '/bizmatch_requests' });
      settings.push({ label: '依頼作成', path: '/bizmatch_requests/new' });
      break;
    case '/bizmatch_requests/show':
      settings.push({ label: '依頼一覧', path: '/bizmatch_requests' });
      settings.push({ label: '依頼表示', path: '/bizmatch_requests/show' });
      break;
    case '/bizmatch_requests/edit':
      settings.push({ label: '依頼一覧', path: '/bizmatch_requests' });
      settings.push({ label: '依頼表示', path: '/bizmatch_requests/show' });
      settings.push({ label: '依頼編集', path: '/bizmatch_requests/edit' });
      break;
    case '/bizmatch_requests/apply':
      settings.push({ label: '依頼一覧', path: '/bizmatch_requests' });
      settings.push({ label: '依頼表示', path: '/bizmatch_requests/show' });
      settings.push({ label: '応募', path: '/bizmatch_requests/apply' });
      break;
    case '/bizmatch_applications':
      settings.push({ label: '応募一覧', path: '/bizmatch_applications' });
      break;
    case '/bizmatch_applications/show':
      settings.push({ label: '応募一覧', path: '/bizmatch_applications' });
      settings.push({ label: '応募表示', path: '/bizmatch_applications/show' });
      break;
    case '/bizmatch_applications/edit':
      settings.push({ label: '応募一覧', path: '/bizmatch_applications' });
      settings.push({ label: '応募表示', path: '/bizmatch_applications/show' });
      settings.push({ label: '応募編集', path: '/bizmatch_applications/edit' });
      break;
    case '/bizmatch_applications/order':
      settings.push({ label: '応募一覧', path: '/bizmatch_applications' });
      settings.push({ label: '応募表示', path: '/bizmatch_applications/show' });
      settings.push({ label: '発注', path: '/bizmatch_applications/order' });
      break;
    case '/bizmatch_deals':
      settings.push({ label: '取引一覧', path: '/bizmatch_deals' });
      break;
    case '/bizmatch_deals/show':
      settings.push({ label: '取引一覧', path: '/bizmatch_deals' });
      settings.push({ label: '取引表示', path: '/bizmatch_deals/show' });
      break;
    case '/bizmatch_deals/confirm':
      settings.push({ label: '取引一覧', path: '/bizmatch_deals' });
      settings.push({ label: '取引表示', path: '/bizmatch_deals/show' });
      settings.push({ label: '受注', path: '/bizmatch_deals/confirm' });
      break;
    case '/milestones':
      settings.push({ label: '目標一覧', path: '/milestones' });
      break;
    case '/milestones/new':
      settings.push({ label: '目標一覧', path: '/milestones' });
      settings.push({ label: '目標作成', path: '/milestones/new' });
      break;
    case '/milestones/show':
      settings.push({ label: '目標一覧', path: '/milestones' });
      settings.push({ label: '目標表示', path: '/milestones/show' });
      break;
    case '/milestones/edit':
      settings.push({ label: '目標一覧', path: '/milestones' });
      settings.push({ label: '目標表示', path: '/milestones/show' });
      settings.push({ label: '目標編集', path: '/milestones/edit' });
      break;
    case '/all_progresses':
      settings.push({ label: '全体進捗状況', path: '/all_progresses' });
      break;
    case '/individual_progresses':
      settings.push({ label: '全体進捗状況', path: '/all_progresses' });
      settings.push({ label: '個社別進捗状況', path: '/individual_progresses' });
      break;
    case '/master_companies':
      settings.push({ label: '関与先一覧', path: '/master_companies' });
      break;
    case '/master_companies/new':
      settings.push({ label: '関与先一覧', path: '/master_companies' });
      settings.push({ label: '関与先作成', path: '/master_companies/new' });
      break;
    case '/master_companies/show':
      settings.push({ label: '関与先一覧', path: '/master_companies' });
      settings.push({ label: '関与先表示', path: '/master_companies/show' });
      break;
    case '/master_companies/edit':
      settings.push({ label: '関与先一覧', path: '/master_companies' });
      settings.push({ label: '関与先表示', path: '/master_companies/show' });
      settings.push({ label: '関与先編集', path: '/master_companies/edit' });
      break;
    case '/master_taxaccountants':
      settings.push({ label: '税理士一覧', path: '/master_taxaccountants' });
      break;
    case '/master_taxaccountants/new':
      settings.push({ label: '税理士一覧', path: '/master_taxaccountants' });
      settings.push({ label: '税理士作成', path: '/master_taxaccountants/new' });
      break;
    case '/master_taxaccountants/show':
      settings.push({ label: '税理士一覧', path: '/master_taxaccountants' });
      settings.push({ label: '税理士表示', path: '/master_taxaccountants/show' });
      break;
    case '/master_taxaccountants/edit':
      settings.push({ label: '税理士一覧', path: '/master_taxaccountants' });
      settings.push({ label: '税理士表示', path: '/master_taxaccountants/show' });
      settings.push({ label: '税理士編集', path: '/master_taxaccountants/edit' });
      break;
  }

  return (
    <>
      <ol className="flex items-center whitespace-nowrap p-2 bg-gray-300">
        {settings.map(({ label, path }, index) => (
          index < settings.length - 1 ?
            <li className="inline-flex items-center" key={label}>
              <a className="flex items-center text-gray-700 hover:text-gray-800" href={path}>
                {label}
              </a>
              <svg className="flex-shrink-0 mx-1 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </li>
            :
            <li className="inline-flex items-center text-gray-700 truncate" key={label}>
              {label}
            </li>
        ))}
      </ol>
    </>
  );
}
