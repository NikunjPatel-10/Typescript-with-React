import { Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function OpenModal() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group>
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export default OpenModal;
