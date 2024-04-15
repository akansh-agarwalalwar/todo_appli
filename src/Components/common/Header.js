import React from "react";
import Logo from "../../Assests/logo.png";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Badge } from "@mui/joy";
import Text from "./Text";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Search } from "@mui/icons-material";
import Avatar from '@mui/joy/Avatar';

function Header() {
  return (
    <div className=" bg-richblack-800 h-[90px] drop-shadow-2xl w-full flex justify-between items-center px-6 border-y-2 border-solid border-richblue-50">
      <div className="flex justify-between items-center">
        <img
          className="h-[80px] drop-shadow-2xl"
          title="Notification"
          src={Logo}
          alt="logo"
        />
        <Text text={"Notify"} />
      </div>
      <div className="flex justify-between items-center gap-6 ">
        <Input
          startDecorator={<Search />}
          endDecorator={<Button>Search</Button>}
          sx={{
            "--Input-decoratorChildHeight": "31px",
            "--Input-placeholderOpacity": 0.6,
            "--Input-minHeight": "40px",
            "--Input-backgroundOpacity": 0,
          }}
        />
        <p  className="text-4xl text-blue-5 cursor-pointer">
          <Badge size="sm" badgeContent={8}>
            <CircleNotificationsIcon fontSize="extraLarge" />
          </Badge>
        </p>
        <div className="border-2 border-solid border-white p-2 rounded-full cursor-pointer" >
        <Avatar variant="soft" size="sm" />
        </div>
      </div>
    </div>
  );
}

export default Header;
