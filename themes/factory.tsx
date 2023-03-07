//@ts-ignore
import loadable from "@loadable/component";

export default function factory(themeName: string) {
  return {
    homepage: homepage(themeName),
  };
}

function homepage(themeName: string) {
  const HomePage = loadable(
    () => import(`../themes/${themeName}/pages/HomePage`)
  );
  return <HomePage />;
}
