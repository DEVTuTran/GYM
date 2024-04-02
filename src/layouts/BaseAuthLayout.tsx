import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CSSObject, Theme, styled } from "@mui/material/styles";

import useToggle from "hooks/useToggle";
import { Paper, Stack } from "@mui/material";
import AccountIcon from "components/AccountIcon";
import {
  AnalyticsOutlined,
  EventAvailable,
  FitnessCenterOutlined,
  HelpOutline,
  PeopleAltOutlined,
  Person,
  RoomPreferencesOutlined,
  StoreOutlined,
} from "@mui/icons-material";
import BaseSelectField from "components/common/BaseSelectField";
import { FLexBox, StyleLable } from "Styles";
import { ModalSetup } from "components/Modal/ModalSetup";
import { ENDPOINT } from "constants/endpoint";

const drawerWidth = 240;

const siderItems = [
  {
    label: "ダッシュボード",
    href: ENDPOINT.DASHBOARD,
    icon: <EventAvailable />,
  },
  {
    label: "イベント管理",
    href: ENDPOINT.USERS,
    icon: <PeopleAltOutlined />,
  },
  {
    label: "アカウント管理1",
    href: ENDPOINT.MACHINES,
    icon: <FitnessCenterOutlined />,
  },
  {
    label: "アカウント管理2",
    href: ENDPOINT.STAFFS,
    icon: <Person />,
  },
  {
    label: "アカウント管理4",
    href: ENDPOINT.FACILITIES,
    icon: <RoomPreferencesOutlined />,
  },
  {
    label: "アカウント管理3",
    href: ENDPOINT.BUSINESS,
    icon: <StoreOutlined />,
  },

  {
    label: "アカウント管理5",
    href: ENDPOINT.ANALYTICS,
    icon: <AnalyticsOutlined />,
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "white",
  color: "black",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function BaseAuthLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const [isOpenSidebar, toggleSidebar] = useToggle(true);
  const [isShowPopup, togglePopup] = useToggle(false);
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const handleListItemClick = (pathName: string) => {
    setSelectedPath(pathName);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={isOpenSidebar}>
        <Stack
          component={Paper}
          elevation={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height={64}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleSidebar()}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              GYM
            </Typography>
          </Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            color={(theme) => theme.palette.grey[400]}
          >
            <FLexBox>
              <StyleLable variant="body2">select1</StyleLable>
              <BaseSelectField options={[]} />
            </FLexBox>
            <FLexBox>
              <StyleLable variant="body2">select2</StyleLable>
              <BaseSelectField options={[]} />
            </FLexBox>

            <IconButton onClick={() => togglePopup()}>
              <HelpOutline sx={{ width: 40, height: 40 }} />
            </IconButton>
            <AccountIcon
              user={{
                name: "hello word",
                email: "helloword@gmail.com",
              }}
              sessionStatus={"authenticated"}
            />
          </Stack>
        </Stack>
      </AppBar>
      <Drawer variant="permanent" open={isOpenSidebar}>
        <DrawerHeader></DrawerHeader>
        <List>
          {siderItems.map((sider) => (
            <ListItem
              key={sider.label}
              disablePadding
              sx={{
                display: "block",
                color: (theme) => theme.palette.text.secondary,
              }}
              component={Link}
              to={sider.href}
              selected={selectedPath === sider.href}
              onClick={() => handleListItemClick(sider.href)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpenSidebar ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpenSidebar ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {sider.icon}
                </ListItemIcon>
                <ListItemText
                  primary={sider.label}
                  sx={{ opacity: isOpenSidebar ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box
          sx={{
            px: 4,
            py: 5,
          }}
        >
          {children}
        </Box>
      </Box>
      <ModalSetup open={isShowPopup} setOpen={togglePopup} />
    </Box>
  );
}
