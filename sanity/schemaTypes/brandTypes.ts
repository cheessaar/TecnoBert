import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Marca",
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
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Imagen de Marca",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "descripcion",
      media: "image",
    },
  },
});
