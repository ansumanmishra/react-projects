export const postAction = async ({ request }) => {
  const formData = await request.formData();
  const postData = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to save the post");
  }

  // Redirect to the posts list page after successful submission
  return { status: 201 };
};