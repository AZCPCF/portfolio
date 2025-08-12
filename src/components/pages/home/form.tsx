import { Button, Input, toast, Typography, useRequest } from "cubes-ui";
import { useState } from "react";

export default function HomeForm({ closeModal }: { closeModal: () => void }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: fields.name.trim() ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
        ? ""
        : "Invalid email address",
      title: fields.title.trim() ? "" : "Title is required",
      message:
        fields.message.trim().length >= 10
          ? ""
          : "Message must be at least 10 characters",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };
  const { mutateAsync, isPending } = useRequest("mutation");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await mutateAsync(
      { endpoint: "contacts", body: fields, method: "POST" },
      {
        onSuccess: () => {
          setFields({ email: "", message: "", name: "", title: "" });
          closeModal();
          toast.success("Message sent successfully!");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 modal max-md:grid-cols-1 w-full gap-2 **:!rounded-none **:ring-offset-primary-700"
    >
      <Typography variant="h2" className="col-span-full pb-3">
        Contact Me
      </Typography>

      <div>
        <Input
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleChange}
        />
        {errors.name && (
          <Typography variant="small" className="text-red-500">
            {errors.name}
          </Typography>
        )}
      </div>

      <div>
        <Input
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
        />
        {errors.email && (
          <Typography variant="small" className="text-red-500">
            {errors.email}
          </Typography>
        )}
      </div>

      <div className="col-span-full">
        <Input
          name="title"
          placeholder="Title"
          value={fields.title}
          onChange={handleChange}
        />
        {errors.title && (
          <Typography variant="small" className="text-red-500">
            {errors.title}
          </Typography>
        )}
      </div>

      <div className="col-span-full">
        <Input
          name="message"
          className="!pb-20"
          placeholder="Message"
          value={fields.message}
          onChange={handleChange}
        />
        {errors.message && (
          <Typography variant="small" className="text-red-500">
            {errors.message}
          </Typography>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        variant="outline"
        className="col-span-full"
      >
        {isPending ? "SUBMITING..." : "SUBMIT"}
      </Button>
    </form>
  );
}
