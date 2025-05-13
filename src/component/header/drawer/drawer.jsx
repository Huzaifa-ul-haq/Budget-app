
"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { FormComponent } from "../form/form";


export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[20vh] relative items-center justify-center">
        <Button className="w-auto h-12 text-lg" color="gray" onClick={() => setIsOpen(true)}> Make budget</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="top" className="">
        <DrawerHeader title="Save your Budget" />
        <DrawerItems>
          <FormComponent/>
        </DrawerItems>
      </Drawer>
    </>
  );
}



