import type { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  admin: {
    useAsTitle: 'startTime',
  },
  fields: [
    {
      name: "startTime",
      type: "date",
      required: true,
      index: true,
      admin: {
        date: {
          displayFormat: "dd/MM/yyyy HH:mm", // NOTE: This line is important
          // To trigger the bug, change the above line to:
          // displayFormat: "DD/MM/YYYY HH:mm",
          pickerAppearance: "dayAndTime",
          timeIntervals: 1,
        },
      },
    },
  ],
}
