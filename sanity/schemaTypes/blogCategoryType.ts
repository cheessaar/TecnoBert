import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogcategory",
  title: "Categorías de Blog",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "titulo",
      type: "string",
    }),
    defineField({
      name: "etiqueta",
      type: "slug",
      options: {
        source: "titulo",
      },
    }),
    defineField({
      name: "descripcion",
      type: "text",
    }),
  ],
});
