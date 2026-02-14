import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
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
      name: "autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "imagenPrincipal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categoriasDeBlog",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "blogcategory" } }),
      ],
    }),
    defineField({
      name: "fechaDePublicacion",
      type: "datetime",
    }),
    defineField({
      name: "isLatest",
      title: "Ultimo blog",
      type: "boolean",
      description: "Toggle to Latest on or off",
      initialValue: true,
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      isLatest: "isLatest",
    },
    prepare(selection) {
      const { author, isLatest } = selection;
      return {
        ...selection,
        subtitle: author && `${isLatest ? "Latest | " : ""} By ${author}`,
      };
    },
  },
});
