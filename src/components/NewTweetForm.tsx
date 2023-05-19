import Button from "./Button";
const NewTweetForm = () => {
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        {/* <ProfileImage src="url"></ProfileImage> */}
        <textarea
          placeholder="What's happening?"
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        ></textarea>
      </div>
      <Button>Tweet</Button>
    </form>
  );
};
export default NewTweetForm;
