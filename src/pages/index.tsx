import {
  Button,
  Typography,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  Fab,
  CallIcon,
  FlagHonduras,
  ArrowBackIcon,
  MenuItem,
  NavbarDropdownItem,
  Paper,
  Slot,
  ProgressIndicatorCircular,
  ProgressIndicatorLinear,
  RadioButton,
  TextLink,
  Accordion,
  SettingIcon,
  AccordionGroup,
  type AccordionProps,
  Alert,
  Breadcrumbs,
  type TextLinkProps,
  Chip,
  Header,
  ListItem,
  NavLink,
  OrnamentalContainer,
  TextField,
  DialogModal,
  ListGroup,
  type ListItemProps,
  NavbarDropdown,
  type NavbarDropdownItemProps,
  BannerBlock,
  BannerFullWidthTextCenter,
  Hero,
  Faq,
  Navbar,
  type NavLinkProps,
  TextCenterGridCenter,
  type GridCenterElementProps,
  type LanguageOptionProps,
} from '@josegts/ds-components';
import { Toolbar } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import dynamic from 'next/dynamic';
import { Trans } from 'react-i18next';
import Image from 'next/image';
import { useState } from 'react';

/* const NavbarMf = dynamic(async () => await import('navbar/NavbarMf' as any), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}); */

/* const NavbarMf = dynamic(async () => await import('navbar/NavbarMf'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    // if failer show message
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    return config;
  },
}); */

const Home = () => {
  /* const mutation = useMutation<any, any, any, any>({
    mutationFn: async newTodo => {
      return await axios.post('/api/todos', newTodo);
    },
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    mutation.mutate({ title: 'default load' });
  }, []); */

  const { data } = useQuery(
    ['todos'],
    async () => await axios.get('/api/todos')
  );

  const accordionsList: AccordionProps[] = [
    { title: 'accordion 1', subtitle: 'subtitle 1', children: 'content' },
    {
      title: 'accordion 2',
      subtitle: 'subtitle 2',
      children: 'content',
      open: true,
    },
    { title: 'accordion 3', subtitle: 'subtitle 3', children: 'content' },
    { title: 'accordion 4', subtitle: 'subtitle 4', children: 'content' },
  ];

  const [testUrl, setTestUrl] = useState('url-4');

  const linksBread: TextLinkProps[] = [
    {
      link: 'Home',
      onNavigate: () => {
        setTestUrl('url-home');
      },
      lastLinkInBreadcrumbs: testUrl === 'url-home',
    },
    {
      link: 'Url 1',
      onNavigate: () => {
        setTestUrl('url-1');
      },
      lastLinkInBreadcrumbs: testUrl === 'url-1',
    },
    {
      link: 'Url 2',
      onNavigate: () => {
        setTestUrl('url-2');
      },
      lastLinkInBreadcrumbs: testUrl === 'url-2',
    },
    {
      link: 'Url 3',
      onNavigate: () => {
        setTestUrl('url-3');
      },
      lastLinkInBreadcrumbs: testUrl === 'url-3',
    },
    {
      link: 'Url 4',
      onNavigate: () => {
        setTestUrl('url-4');
      },
      lastLinkInBreadcrumbs: testUrl === 'url-4',
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const listGroupItems: ListItemProps[] = [
    {
      title: 'item 1',
      textConfig: '3-lines',
      supportingText: 'supporting text',
      metadata: 'metadata',
      tailObject: <SettingIcon />,
      mainObject: <SettingIcon />,
      showDivider: true,
    },
    {
      title: 'item 2',
      textConfig: '3-lines',
      supportingText: 'supporting text',
      metadata: 'metadata',
      tailObject: <SettingIcon />,
      mainObject: <SettingIcon />,
    },
  ];

  const navbarItems: NavbarDropdownItemProps[] = [
    {
      title: 'item 1',
    },
  ];

  const handleCallbackLanguage = (language: string) => {
    console.log(language);
  };
  const languages: LanguageOptionProps[] = [
    {
      copie: 'Honduras',
      country: 'honduras',
    },
    {
      copie: 'El Salvador',
      country: 'el-salvador',
      default: true,
    },
  ];
  const [currentMenu, setCurrentMenu] = useState('home');

  const links: NavLinkProps[] = [
    {
      title: 'Home',
      onNavigate: () => {
        toggleMenu('home');
      },
      active: currentMenu === 'home',
    },
    {
      title: 'Opcion 1',
      onNavigate: () => {
        toggleMenu('opc1');
      },
      active: currentMenu === 'opc1',
    },
    {
      title: 'Opcion 2',
      onNavigate: () => {
        toggleMenu('opc2');
      },
      active: currentMenu === 'opc2',
    },
  ];

  const toggleMenu = (menu: string) => {
    setCurrentMenu(menu);
  };

  const textCenterGridItems: GridCenterElementProps[] = [
    {
      title: 'item 1',
      subtitle: 'subtitle 1',
      image: (
        <Image src='/icon-3d-bank.png' alt='alt' width={100} height={100} />
      ),
      onClick: () => {},
    },
    {
      title: 'item 2',
      subtitle: 'subtitle 2',
      image: (
        <Image src='/icon-3d-bank.png' alt='alt' width={100} height={100} />
      ),
      onClick: () => {},
    },
    {
      title: 'item 3',
      subtitle: 'subtitle 3',
      image: (
        <Image src='/icon-3d-bank.png' alt='alt' width={100} height={100} />
      ),
      onClick: () => {},
    },
  ];

  return (
    <>
      <Toolbar sx={{ height: { xs: '80px', lg: '145px' } }} />
      <Slot
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '10px',
        }}
      >
        <Typography variant='h1'>Atoms</Typography>
        <Button variant='elevated'>Elevated</Button>
        <CardContent>content</CardContent>
        <CardMedia>media</CardMedia>
        <Checkbox checked />
        <Divider />
        <Fab icon={<CallIcon />} onClick={() => {}} />
        <FlagHonduras size='large' />
        <ArrowBackIcon />
        <MenuItem title='item menu' />
        <NavbarDropdownItem title='item dropdown' />
        <Paper cornerRadius={24}>
          <Slot sx={{ padding: '40px' }}>paper</Slot>
        </Paper>
        <ProgressIndicatorCircular />
        <ProgressIndicatorLinear />
        <RadioButton label='Radio button' checked />
        <TextLink link='Home' />
        <Typography variant='h4'>
          <Trans i18nKey='featureExample.titleExample' />
        </Typography>
        <Typography variant='h5'>
          <Trans i18nKey='featureExample.subtitleExample' />
        </Typography>
        <Typography>Fetch with tanstack query</Typography>
        {data?.data?.data?.map((todo: any) => (
          <Typography key={todo.id}>{todo.name}</Typography>
        ))}
        <Typography variant='h1'>Molecules</Typography>
        <Accordion
          title='Accordion'
          subtitle='subtitle'
          actionIcon1={<SettingIcon size='medium' />}
        >
          content
        </Accordion>
        <Accordion
          title='Accordion'
          subtitle='subtitle'
          actionIcon1={<SettingIcon size='medium' />}
          open
        >
          content
        </Accordion>
        <AccordionGroup accordions={accordionsList} />
        <Alert title='Alert' message='Message' link='test' />
        <Breadcrumbs textLinkProps={linksBread} />
        <Chip label='Chip' color='success' />
        <Header
          mainObject={<SettingIcon />}
          title='Header title'
          subheader='subtitle'
          overlineText='tagline?'
          tagline
        />
        <ListItem
          title='list item'
          metadata='metadata'
          tailObject={<SettingIcon />}
          supportingText='supporting text'
          textConfig='2-lines'
          showOutline
        />
        <NavLink title='nav link' active />
        <OrnamentalContainer
          size='100px'
          image={
            <Image src='/icon-3d-bank.png' alt='alt' width={100} height={100} />
          }
        />
        <TextField label='Label input' value='some text' />
        <Typography variant='h1'>Organisms</Typography>
        <Button onClick={handleOpenModal}>Open modal</Button>
        <DialogModal title='Dialog' open={openModal} onClose={handleCloseModal}>
          content
        </DialogModal>
        <ListGroup itemsList={listGroupItems} />
        <NavbarDropdown itemPropList={navbarItems} title='dropdown' />
        <BannerBlock
          color='primary'
          headline='headline'
          tagline='tagline'
          body='body'
          buttons={[
            {
              label: 'button',
              variant: 'elevated',
              onClick: () => {},
            },
          ]}
          backgroundImgDesktop={
            <Image src='/bannerblock-background.webp' alt='alt' fill />
          }
          backgroundImgMobile={
            <Image src='/background-mobile.png' alt='alt' fill />
          }
        >
          custom content
        </BannerBlock>
        <BannerFullWidthTextCenter
          color='primary'
          body='body'
          headline='headline'
          buttons={[
            {
              label: 'button',
              variant: 'elevated',
              onClick: () => {},
            },
          ]}
          backgroundImgDesktop={
            <Image src='/background-desktop-2.png' alt='alt' fill />
          }
          backgroundImgMobile={
            <Image src='/background-mobile.png' alt='alt' fill />
          }
        />
        <Hero
          body='body'
          headline='headline'
          tagline='tagline'
          buttons={[
            {
              label: 'button',
              variant: 'elevated',
              onClick: () => {},
            },
          ]}
          backgroundImgDesktop={
            <Slot sx={{ width: '100%', height: '100%' }}>
              <Image src='/bannerblock-background.webp' alt='alt' fill />
            </Slot>
          }
          backgroundImgMobile={
            <Image src='/background-mobile.png' alt='alt' fill />
          }
        />
        <Faq
          title='Faq'
          buttonLabel='button'
          overlineText='overline'
          accordionItems={accordionsList}
        />
        <Navbar
          callbackLanguage={handleCallbackLanguage}
          contactText='Contacto'
          languages={languages}
          logo={
            <Image
              src='/logo-ficohsa.png'
              alt='Tranxact Logo'
              width={117}
              height={40}
            />
          }
          navLinks={links}
          openText='Abrir'
          closeText='Cerrar'
          position='static'
        />
        <TextCenterGridCenter
          items={textCenterGridItems}
          mainAction={<Button>Button</Button>}
          subtitle='dsds'
          title='title'
          tagText='tag'
        />
      </Slot>
    </>
  );
};

export default Home;
