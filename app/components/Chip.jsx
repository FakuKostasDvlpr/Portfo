import React from "react";
import {Chip} from "@nextui-org/react";
import {CheckIcon} from "./ui/CheckIcon";
import {NotificationIcon} from "./ui/Notification";

export default function ChipIcon() {
  return (
    <div className="flex gap-4">
      <Chip
        startContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
        className="flex gap-2"
      >
        <span className="text-gray-700 font-bold ">Active</span>
      </Chip>
    </div>
  );
}
