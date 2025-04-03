export type Application = {
  docId: string
  affiliation: string
  annotation: string
  authorsList: string[]
  choiceDescription: string
  email: string
  fullName: string
  jobTitle: string
  reportTitle: string
  scientificResult: string
  section: string
  uid: string
}

export interface ApplicationDTO extends Application {}
