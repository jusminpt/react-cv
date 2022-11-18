export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "id",
      title: "id",
      type: "number",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
};
