import * as z from 'zod'

export const applicationFormSchema = z.object({
  affiliation: z.string().nonempty(),
  annotation: z.string().min(100),
  authorsList: z.array(z.string().nonempty()).min(1),
  choiceDescription: z.string().nonempty(),
  email: z.string().email(),
  fullName: z.string().nonempty(),
  jobTitle: z.string().nonempty(),
  reportTitle: z.string().nonempty(),
  scientificResult: z.string().nonempty(),
  section: z.string().nonempty('Section must be selected'),
})

export type ApplicationFormValidationType = z.infer<
  typeof applicationFormSchema
>
