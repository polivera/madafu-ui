import "@fontsource/public-sans";
import type { AppProps } from "next/app";
import NavMenu from "./NavMenu";
import { useRouter } from "next/router";
import { CssBaseline } from "@mui/joy";
import styled from "@emotion/styled";

const SiteWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const showMenu = pathname !== "/login";
  return (
    <SiteWrapper>
      <CssBaseline />
      {showMenu && <NavMenu />}
      <Component {...pageProps} />
    </SiteWrapper>
  );
}
