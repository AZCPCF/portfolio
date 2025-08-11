import { Blockquote, Typography } from "cubes-ui";

export default function HomeQuote() {
  return (
    <section>
      <Blockquote
        border={false}
        author="Adolf Hitler, Mein Kampf"
        className="border-gray-500 border rounded-none lg:max-w-4xl m-auto -z-10"
      >
        <Typography variant="span" className="max-md:text-lg">
          The grossly impudent lie always leaves traces behind it, even after it
          has been nailed down.
        </Typography>
      </Blockquote>
    </section>
  );
}
