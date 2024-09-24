import Page from "@/components/Page";

import React from "react";

import NewPostForm from "./_components/NewPostForm";

function NewPostPage() {
  return (
    <Page title="post 작성하기">
      <NewPostForm />
    </Page>
  );
}

export default NewPostPage;
