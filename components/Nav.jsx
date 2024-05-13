"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Musicians logo.png";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { usePathname } from "next/navigation";

const settings = ["Podešavanje naloga", "Istorija upita", "Logout"];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pathname = usePathname();

  const linkColor = "text-blue-200";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className="flex flex-col justify-center w-full pt-1 px-4 md:py-4 text-lg text-gray-100 sticky top-0 left-0 border-b bg-gradient-to-r from-gray-900 via-blue-950 to-gray-950">
      <overlay className="bg-yellow-300 fixed top-0 left-0 w-full h-[103px] md:h-[130px] opacity-[.07] -z-10"></overlay>

      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            className=" border-blue-500 rounded-md p-2"
            src={logo}
            alt={"Musicians App Logo"}
            height={50}
            priority
          />
        </Link>

        {/* Postaviti dinamicki username kad se user loguje */}
        {/* <div className="text-sm">Welcome, Marko</div> */}
        {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}>
              {page}
            </Button>
          ))}
        </Box> */}

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
              className="ring-yellow-300/80 ring-2">
              <Avatar
                alt="M"
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting, index) => (
              <Link
                key={index}
                href={`/pages/dashboard/${setting
                  .toLowerCase()
                  .replace(" ", "-")}`}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
      </div>
      <ul className="flex flex-row justify-between space-x-4 p-2 md:p-2 uppercase text-sm">
        <Link
          className={`transition ease-in-out active:scale-[0.95] hover:${linkColor} ${
            pathname === "/pages/dashboard" ||
            pathname === "/pages/dashboard/details"
              ? `${linkColor}`
              : ""
          }`}
          href="/pages/dashboard"
          passHref>
          <li>Event list</li>
        </Link>
        <Link
          className={`transition ease-in-out active:scale-[0.95] hover:${linkColor} ${
            pathname === "/pages/dashboard/lista-upita" ||
            pathname === "/pages/dashboard/lista-upita/detalji-upita"
              ? `${linkColor}`
              : ""
          }`}
          href="/pages/dashboard/lista-upita"
          passHref>
          <li>Lista upita</li>
        </Link>
        <Link
          className={`transition ease-in-out active:scale-[0.95] hover:${linkColor} ${
            pathname === "/pages/dashboard/upit" ? `${linkColor}` : ""
          }`}
          href="/pages/dashboard/upit"
          passHref>
          <li>Pošalji upit</li>
        </Link>
        <Link
          className={`transition ease-in-out active:scale-[0.95] hover:${linkColor} ${
            pathname === "/pages/dashboard/poruke" ? `${linkColor}` : ""
          }`}
          href="/poruke"
          passHref>
          <li>Poruke</li>
        </Link>
      </ul>
    </nav>
  );
}
