import {
  AppShell,
  useMantineTheme,
  Container
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';
import Navbar from './Navbar';
import StatusNotification from '../components/ StatusNotification';

export function Layout({ children }) {
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <AppShell styles={{
      main: {
        padding: "0px",
      },
    }} header={<Navbar theme={theme}></Navbar>}>
      {/* pages */}
      <div style={{ position: 'relative' }}>
        <Container py={theme.spacing.xl}>
          {children}
        </Container>
      </div>
      {/* notification component */}
      <Affix position={{ bottom: 20, left: 20, }}>
        <StatusNotification />
      </Affix>
      {/* scroll to top */}
      <Affix position={{ bottom: 20, right: 20, }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              style={transitionStyles}
              color="red"
              onClick={() => scrollTo({ y: 0 })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
            </Button>
          )}
        </Transition>
      </Affix>
    </AppShell >
  );
}