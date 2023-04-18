import {
  Box,
  Button,
  Input,
  MultiSelect,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { FormEvent, useRef } from "react";
import { Form, Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

// type NoteFormProps = {
//   onSubmit: () => void;
// };

function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Box maw={400} mx="auto" my="auto">
      <form onSubmit={handelSubmit}>
        <TextInput
          label="Title"
          placeholder="enter-title"
          mt="md"
          ref={titleRef}
        />
        <label>Tags</label>
        <CreatableReactSelect isMulti />
        <Textarea
          placeholder="Your comment"
          label="Body"
          withAsterisk
          autosize
          mt="md"
          ref={markdownRef}
        />
        <div>
          <Button mt="md" mx={10}>
            Save
          </Button>
          <Link to="..">
            <Button mt="md" color="gray">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </Box>
  );
}

export default NoteForm;
