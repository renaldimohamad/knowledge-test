import {Col, FormCheck, FormText, ListGroup, Row} from "react-bootstrap"
import {Controller} from "react-hook-form"
import {useRef} from "react"
import {usePostValidation} from "../../services/posts/use-posts-validation"
import CustomInput from "../../assets/common/custom-input"
import {CustomButton} from "../../assets/common/custom-button"
import useStore from "../../stores/hook"
import {usePostsHandler} from "../../services/posts/use-posts-handler"
import {FaEdit, FaTrash} from "react-icons/fa"
import "./index.css"

export const Posts = () => {
   const {
      control,
      handleSubmit,
      reset,
      setValue,
      formState: {errors},
   } = usePostValidation()
   const inputRef = useRef<HTMLInputElement>(null)
   const {user} = useStore()

   const {
      posts,
      handlePostSubmit,
      handlePostDelete,
      handlePostEdit,
      toggleReadStatus,
   } = usePostsHandler(user.id)

   const onSubmit = async (data: any) => {
      await handlePostSubmit(data)
      reset()
   }

   return (
      <div className="classname">
         <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="align-items-center justify-content-center">
               <Col className="d-flex">
                  <Controller
                     control={control}
                     name="content"
                     render={({field}) => (
                        <div className="d-flex flex-column w-100">
                           <CustomInput
                              placeholder="What do you want to achieve today?"
                              type="text"
                              className="custom-input-with-button"
                              {...field}
                              ref={inputRef}
                           />
                           {errors.content && (
                              <FormText className="text-danger mt-1">
                                 {errors.content.message}
                              </FormText>
                           )}
                        </div>
                     )}
                  />
                  <CustomButton
                     customtext={"Post"}
                     className="custom-button-inside-input"
                     type="submit"
                  />
               </Col>
            </Row>
         </form>

         {posts.length === 0 ? (
            <ListGroup variant="flush" className="text-center mt-3">
               <ListGroup.Item style={{color: "red", fontWeight: "bold"}}>
                  No todo found
               </ListGroup.Item>
            </ListGroup>
         ) : (
            posts.map((post: any) => (
               <div className="mb-3 shadow-sm mt-3" key={post.id}>
                  <ListGroup>
                     <ListGroup.Item className="post-list">
                        <div className="d-flex justify-content-between align-items-center">
                           <div className="d-flex flex-row gap-2">
                              <FormCheck
                                 className="custom-checkbox"
                                 type="checkbox"
                                 label=""
                                 checked={post.isRead}
                                 onChange={() => toggleReadStatus(post.id)}
                              />
                              <span
                                 className="post-content"
                                 style={{
                                    textDecoration: post.isRead
                                       ? "line-through"
                                       : "none",
                                 }}
                              >
                                 {post.content}
                              </span>
                           </div>
                           <div className="d-flex gap-2 justify-content-end">
                              <FaEdit
                                 onClick={() =>
                                    handlePostEdit(post, setValue, inputRef)
                                 }
                                 className="icons-edit me-2"
                                 size={18}
                              />
                              <FaTrash
                                 onClick={() => handlePostDelete(post.id)}
                                 className="icons-trash"
                                 size={18}
                              />
                           </div>
                        </div>
                     </ListGroup.Item>
                  </ListGroup>
               </div>
            ))
         )}
      </div>
   )
}
