import {
  Header, MediaQuery, Burger, Image, Menu, Divider, Indicator, Group
} from '@mantine/core';
import { Avatar } from '@mantine/core';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';

function Navbar({ theme }) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header height={70} p="md">

        <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "space-between" }}>

          {/* burger menu */}
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={navbarOpen}
              onClick={() => setNavbarOpen((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          {/* logo */}
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Link href="/" >
              <Image style={{ cursor: "pointer" }} alt={""}
                height={70} src="/logo.png" />
            </Link>
          </MediaQuery>

          <SearchBar />

          {/* profile menu */}
          <Menu control={<Group position="center">
            <Indicator inline color="red">
              <Avatar

                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
            </Indicator>
          </Group>}>
            <Menu.Label></Menu.Label>
            <Link href="/how_it_works" as="/how_it_works">
              <Menu.Item>How it Works</Menu.Item>
            </Link>
            <Link href="/contact" as="/contact">
              <Menu.Item>Contact</Menu.Item>
            </Link>
            <Divider />
            <Menu.Label>Aryan Kumar 2023</Menu.Label>
          </Menu>

        </div>

      </Header>
    </>
  )
}

export default Navbar