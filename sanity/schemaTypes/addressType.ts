import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
  name: "address",
  title: "Addresses",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nombre de la Dirección",
      type: "string",
      description: "Un nombre amigable para esta dirección (por ejemplo, Casa, Trabajo)",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "Correo Electrónico del Usuario",
      type: "email",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
      description: "La dirección incluyendo número de apartamento/unidad",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "city",
      title: "Ciudad",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "Estado/Provincia",
      type: "string",
      description: "Código de estado de dos letras (por ejemplo, NY, CA)",
      validation: (Rule) => Rule.required().length(2).uppercase(),
    }),
    defineField({
      name: "zip",
      title: "Código Postal",
      type: "string",
      description: "Formato: 12345 o 12345-6789",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{5}(-\d{4})?$/, {
            name: "zipCode",
            invert: false,
          })
          .custom((zip: string | undefined) => {
            if (!zip) {
              return "El código postal es obligatorio";
            }
            if (!zip.match(/^\d{5}(-\d{4})?$/)) {
              return "Por favor, ingrese un código postal válido (por ejemplo, 12345 o 12345-6789)";
            }
            return true;
          }),
    }),
    defineField({
      name: "default",
      title: "Dirección Predeterminada",
      type: "boolean",
      description: "¿Es esta la dirección de envío predeterminada?",
      initialValue: false,
    }),

    defineField({
      name: "createdAt",
      title: "Fecha de Creación",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      city: "city",
      state: "state",
      isDefault: "default",
    },
    prepare({ title, subtitle, city, state, isDefault }) {
      return {
        title: `${title} ${isDefault ? "(Default)" : ""}`,
        subtitle: `${subtitle}, ${city}, ${state}`,
      };
    },
  },
});
