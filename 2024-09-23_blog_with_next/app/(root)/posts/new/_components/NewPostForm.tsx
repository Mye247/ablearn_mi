"use client";

import { createPost } from "@/api/posts.API";
import Button from "@/app/(root)/_components/Button";
import Textarea from "@/app/(root)/_components/Textarea";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { NewPostsData } from "@/schemas/posts.schema";
import { useRouter } from "next/navigation";

import React, { ComponentProps, useState } from "react";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  // 핸들러 만들면 "use client" 사용하기
  const handleChangeTitle: ComponentProps<"input">["onChange"] = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 40) return;

    setTitle(inputValue);
  };
  const handleChangeAuthorName: ComponentProps<"input">["onChange"] = (e) => {
    const inputValue = e.target.value;
    if (inputValue.includes("바보")) {
      alert("미풍양속에 적절한 이름만 써주세요");

      setAuthorName("");
      return;
    }

    setAuthorName(inputValue);
  };

  const handleChangeContent: ComponentProps<"textarea">["onChange"] = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length > 500) return;

    setContent(inputValue);
  };
  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!title) return alert("제목을 입력해 주세요");
    if (!authorName) return alert("작성자 이름을 입력해 주세요");
    if (!content) return alert("글 내용을 입력해 주세요");

    // 이제 서버로 내용 보내면 끝 + 홈으로 이동하기
    const newPostData: NewPostsData = {
      title,
      content,
      authorName,
    };

    const newPost = await createPost(newPostData);

    if (!newPost) return alert("포스트가 생성되지 않았습니다");
    router.push(`/posts/${newPost.id}`);
  };

  return (
    <Page>
      <form
        className="flex flex-col gap-y-5 items-start"
        onSubmit={handleSubmitForm}
      >
        {/* 제목 */}
        <Input
          label="글 제목"
          type="text"
          helpText="어쩌구"
          wrapperClassName="w-[300px]"
          onChange={handleChangeTitle}
        />

        {/* 작성자명 */}
        <Input
          label="작성자 이름"
          type="text"
          helpText="저쩌구"
          wrapperClassName="w-[100px]"
          onChange={handleChangeAuthorName}
        />

        {/* 내용 */}
        <Textarea
          label="글 내용"
          helpText="최대 200자까지 작성할 수 있습니다"
          rows={10}
          value={content}
          onChange={handleChangeContent}
        ></Textarea>

        <Button type="submit">작성하기</Button>
      </form>
    </Page>
  );
}

export default NewPostForm;
