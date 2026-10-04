import { useEffect, useState } from 'react';
import TopBar from './components/layout/TopBar';
import AppShell from './components/layout/AppShell';
import DesignNav from './components/layout/DesignNav';
import { routes } from './routes';
import { flow } from './data/mock';

const readPath = () => window.location.hash.slice(1) || '/';

export default function App() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const route = routes.find(({ path: routePath }) => routePath === path) ?? routes[0];
  const Page = route.page;
  const page = <Page />;

  return route.bare ? (
    <>
      {page}
      <DesignNav routes={routes} current={route.path} />
    </>
  ) : (
    <>
      <TopBar steps={flow} />
      <AppShell current={route.path}>{page}</AppShell>
      <DesignNav routes={routes} current={route.path} />
    </>
  );
}
