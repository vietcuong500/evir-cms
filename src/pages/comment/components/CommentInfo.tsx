import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useListingPosts } from "hooks/posts";
import { useListingUser } from "pages/user/hook";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function CommentInfo() {
  const { control } = useFormContext();
  const [postParams, setPostParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  const [userParams, setUserParams] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  const { isLoading: loadingPost, data: posts } = useListingPosts(postParams);
  const { isLoading: loadingUser, data: users } = useListingUser(userParams);
  return (
    <div className="box">
      <p className="box-title">Thông tin cơ bản </p>
      <div className="p-5 flex flex-col gap-4">
        <Controller
          control={control}
          name="content"
          render={({ field: { value, onChange } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="desc">
                Mô tả
              </label>
              <TextArea
                value={value}
                onChange={onChange}
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
                id="desc"
                placeholder=""
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="post_id"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="posts">
                Bài viết
              </label>
              <Select
                value={value}
                onChange={onChange}
                id="posts"
                style={{ width: "100%" }}
                showSearch
                placeholder="Chọn trạng thái"
                loading={loadingPost}
                options={
                  posts
                    ? posts.data.map((el: any) => ({
                        label: el.title,
                        value: el.id,
                      }))
                    : []
                }
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="user_id"
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="mb-1 inline-block" htmlFor="user">
                Tác giả
              </label>
              <Select
                value={value}
                onChange={onChange}
                id="user"
                style={{ width: "100%" }}
                showSearch
                placeholder="Chọn trạng thái"
                loading={loadingUser}
                options={
                  users
                    ? users.data.map((el: any) => ({
                        label: el.username,
                        value: el.id,
                      }))
                    : []
                }
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default CommentInfo;
