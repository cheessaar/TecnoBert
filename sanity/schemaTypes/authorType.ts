import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autores",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "Nombre",
      type: "string",
    }),
    defineField({
      name: "Etiqueta",
      type: "slug",
      options: {
        source: "Nombre",
      },
    }),
    defineField({
      name: "imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
