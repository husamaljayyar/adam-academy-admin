import LibraryNav from '../components/library/LibraryNav';
import Basics from './library/Basics';
import Display from './library/Display';
import Interaction from './library/Interaction';
import { libraryNav } from '../data/library';

// مكتبة المكوّنات: ثلاثة فصول، كلّ فصل ملفّ مستقلّ. لإضافة فصل جديد أضفه هنا فقط.
export default function Library() {
  return (
    <>
      <LibraryNav items={libraryNav} />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-16 px-4 pb-20 pt-10 sm:px-6">
        <Basics />
        <Display />
        <Interaction />
      </main>
    </>
  );
}
