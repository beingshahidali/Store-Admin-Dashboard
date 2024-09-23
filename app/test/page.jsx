const Page = () => {
  const handleForm = async (e) => {
    "use server";
    const username = e.get("username");
    console.log(username);
  };
  return (
    <form action={handleForm}>
      <input type="text" placeholder="type anything" name="username" />
      <button>Submit</button>
    </form>
  );
};

export default Page;
