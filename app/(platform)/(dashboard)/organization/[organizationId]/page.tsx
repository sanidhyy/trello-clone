const OrganizationIdPage = () => {
  async function create(formData: FormData) {
    "use server";

    console.log("I am triggered!");
  }

  return (
    <div>
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a board title"
          className="border border-black p-1"
          required
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
